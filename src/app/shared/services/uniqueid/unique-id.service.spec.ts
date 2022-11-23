import { UniqueIdService } from "./unique-id.service"
describe(UniqueIdService.name, ()=> {

    let service: UniqueIdService = null

    beforeEach(()=> {
    service = new UniqueIdService()
    })

    it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should generate id when called with prefix`,()=> {
        const id = service.generateUniqueIdWithPrefix('app') //Gerar um ID com o prefixo app
        expect(id.startsWith('app-')).toBeTrue() // verifica se inicia com 'app-'
        // expect(id).toContain('app-') -> Verifica se contain 'app-' não verifica se inicia com 'app-'
    })
    it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should generate duplicate IDs when called multiple times`,()=> {
        
        const ids= new Set()
        //const firstId = service.generateUniqueIdWithPrefix('app')
        //const secondId = service.generateUniqueIdWithPrefix('app')
        //expect(firstId).not.toBe(secondId) espera que o First e Second não sejam iguais (comparando duas constantes)
        
        for(let i=0; i<50;i++){
            ids.add(service.generateUniqueIdWithPrefix('app'))
        }
        expect(ids.size).toBe(50)
    })
    it(`#${UniqueIdService.prototype.getNumberGeneratedIds.name} 
    should return the number of generatedsIds when called`,()=> {
        
        service.generateUniqueIdWithPrefix('app')
        service.generateUniqueIdWithPrefix('app')
        //Verifica se foram criadas N ids
        expect(service.getNumberGeneratedIds()).toBe(2)
    })
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw when called with empty`, () => {
        const emptyValues = [null, undefined, '']
        emptyValues.forEach(emptyValue => {
            expect(() => service.generateUniqueIdWithPrefix(emptyValue)).toThrow()
        })   
    })
})

