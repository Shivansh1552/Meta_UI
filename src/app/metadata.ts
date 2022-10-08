 export class IMetadata 
{ 
    id!: number;
    metadata!: metadataBody;
}

export interface metadataBody {
    id:number; 
   metadataName: string;
   ipackName: string ;
   version: number;
}