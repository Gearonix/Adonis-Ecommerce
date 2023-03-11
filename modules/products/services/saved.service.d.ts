import { Repository } from 'typeorm';
import { AuthService } from '@app/modules/auth';
import { SavedEntity } from '@app/entities/saved.entity';
export declare class SavedService {
    private saved;
    private authService;
    constructor(saved: Repository<SavedEntity>, authService: AuthService);
    addToSaved(productId: number): Promise<{
        userId: number;
        productId: number;
    } & SavedEntity>;
    removeFromSaved(productId: number): Promise<import("typeorm").DeleteResult>;
    getSavedProducts(id?: number): Promise<SavedEntity[]>;
}
