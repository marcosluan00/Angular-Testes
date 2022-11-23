import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Injectable()

export class UniqueIdService {
    
    private numberOfGeneratedIds = 0;

    generateUniqueIdWithPrefix(prefix: string): string {

        if(!prefix) {
            throw Error('Prefix cannot be empty');
        }

        const uniqueId = this.generateUniqueId()
        this.numberOfGeneratedIds++;

        return `${prefix}-${uniqueId}`;
    }
    getNumberGeneratedIds(): number {
        return this.numberOfGeneratedIds;
    }

    private generateUniqueId(): string {
        return uuidv4();
    }
}