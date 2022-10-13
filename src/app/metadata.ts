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
   section: Section
}

// export interface SectionsModel{
//     steps : StepsConfig[];
// }
export interface Section{
    description: string;
    name : string;
    title : string;
}