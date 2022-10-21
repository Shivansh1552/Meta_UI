export class IMetadata {
  id!: number;
  metadata!: metadataBody;
}

export interface metadataBody {
  id: number;
  metadataName: string;
  ipackName: string;
  version: number;
  section: Section;
}

// export interface SectionsModel{
//     steps : StepsConfig[];
// }

export interface Section {
  name: string;
  title: string;
  description: string;
  staticConfig: StaticConfig;
  apiDisplayConfig: ApiDisplayConfig;
}

export interface StaticConfig {
  content: string;
  header: HeadersConfig[];
}

export interface HeadersConfig {
  templateName: string;
  headerString: string;
}

export interface ApiDisplayConfig {
  name1: string;
  title1: string;
  description1: string;

  rows: Rows;

  ddLabel: string;

  transferFieldKey: string;

  sourceApi: SourceApi;

  displayItems: DisplayItem;

  testConfigure: boolean;

  testApi: TestAPI;
}

export interface Rows {
  hint: string;
  name: string;
  placeholder: string;
  type: string;
  validations: Validations;
}

export interface Validations {
  type: string;
  value: string;
}

export interface SourceApi {
  path: string;
  authtype: string;
  idField: string;
  labelField: string;
}

export interface DisplayItem {
  fieldName: string;
  label: string;
  secure: boolean;
}
export interface TestAPI {
  authtype: string;
}

// export interface ApiDisplayConfig
// {

//            name: string;
//            title : string;
//            hint: string;

//             placeholder : string;
//            type: string;
//            testConfiguration: boolean;
//             testApi: ConnectionItem;

//             ddLabel: string;

//             transferFieldKey: string;

//             sourceApi: SourceApi;
//            displayItems: DisplayItem;

// }

// export interface ConnectionItem  {
//     path:string;
//     idField:string;
//     labelField:string
// }

// export interface DisplayItem {
//     fieldName: string;
//     label: string;
//     secure: boolean
// }

// export interface MetaData {
//     id: string;
//     name: string;
//     iPackName: string;
//     version: number;
//     extraTransferFields: ExtraTransferField[]
//     sections: Section[]
// }

// interface ExtraTransferField {
//     key: string;
//     value: string
// }

// interface Section {
//     steps?: Step[]
// }

// interface Step {
//     description: string;
//     componentName: string;
//     name: string;
//     title: string;
//     config: StaticConfig | StepConfig
// }

// export interface StepConfig {
//     rows?: StepRow[];
//     valuePopulatedApi?: Connection
// }

// interface StaticConfig extends StepConfig{
//     content: string;
//     headers: ConfigHeader[];
//     type: 'static'
// }

// interface ApiDisplayConfig extends StepConfig {
//    ddLabel: string;
//    transferFieldKey: string;
//    sourceApi: ConnectionItem;
//    displayItems: DisplayItem[];
//    testConfiguration: boolean;
//    testApi: ConnectionItem
// }

// interface ConfigHeader {
//     templateName: string;
//     headerString: string
// }

// interface StepRow {
//     input: StepInput;
//     label: string;
//     description: string
// }

// interface StepInput {
//     hint?: string;
//     name: string;
//     placeholder?: string;
//     type: string;
//     validations?: any;
//     defaultValue?: any;
//     saveValueAsObjectConfiguration?: any
// }

// export interface Connection {
//     authType:string;
//     url: string
// }

// interface ConnectionItem extends Connection {
//     path:string;
//     idField:string;
//     labelField:string
// }

// interface DisplayItem {
//     fieldName: string;
//     label: string;
//     secure: boolean
// }
