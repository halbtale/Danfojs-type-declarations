declare module 'danfojs' {
    export { Series } from "./core/series";
    export { DataFrame } from "./core/frame";
    export { to_datetime } from "./core/timeseries";
    export { merge } from "./core/merge";
    export { concat } from "./core/concat";
    export { date_range } from "./core/date_range";
    export { get_dummies } from "./core/get_dummies";
    export { read_csv, read_json, read_excel, read } from "./io/reader";
    export { LabelEncoder, OneHotEncoder } from "./preprocessing/encodings";
    export { MinMaxScaler, StandardScaler } from "./preprocessing/scalers";

}