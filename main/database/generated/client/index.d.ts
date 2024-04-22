
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model WTGPart
 * 
 */
export type WTGPart = $Result.DefaultSelection<Prisma.$WTGPartPayload>
/**
 * Model WTGDoor
 * 
 */
export type WTGDoor = $Result.DefaultSelection<Prisma.$WTGDoorPayload>
/**
 * Model Archive
 * 
 */
export type Archive = $Result.DefaultSelection<Prisma.$ArchivePayload>
/**
 * Model UploadItem
 * 
 */
export type UploadItem = $Result.DefaultSelection<Prisma.$UploadItemPayload>
/**
 * Model ScoresPaths
 * 
 */
export type ScoresPaths = $Result.DefaultSelection<Prisma.$ScoresPathsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more WTGParts
 * const wTGParts = await prisma.wTGPart.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more WTGParts
   * const wTGParts = await prisma.wTGPart.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.wTGPart`: Exposes CRUD operations for the **WTGPart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WTGParts
    * const wTGParts = await prisma.wTGPart.findMany()
    * ```
    */
  get wTGPart(): Prisma.WTGPartDelegate<ExtArgs>;

  /**
   * `prisma.wTGDoor`: Exposes CRUD operations for the **WTGDoor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WTGDoors
    * const wTGDoors = await prisma.wTGDoor.findMany()
    * ```
    */
  get wTGDoor(): Prisma.WTGDoorDelegate<ExtArgs>;

  /**
   * `prisma.archive`: Exposes CRUD operations for the **Archive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archives
    * const archives = await prisma.archive.findMany()
    * ```
    */
  get archive(): Prisma.ArchiveDelegate<ExtArgs>;

  /**
   * `prisma.uploadItem`: Exposes CRUD operations for the **UploadItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadItems
    * const uploadItems = await prisma.uploadItem.findMany()
    * ```
    */
  get uploadItem(): Prisma.UploadItemDelegate<ExtArgs>;

  /**
   * `prisma.scoresPaths`: Exposes CRUD operations for the **ScoresPaths** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScoresPaths
    * const scoresPaths = await prisma.scoresPaths.findMany()
    * ```
    */
  get scoresPaths(): Prisma.ScoresPathsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    WTGPart: 'WTGPart',
    WTGDoor: 'WTGDoor',
    Archive: 'Archive',
    UploadItem: 'UploadItem',
    ScoresPaths: 'ScoresPaths'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'wTGPart' | 'wTGDoor' | 'archive' | 'uploadItem' | 'scoresPaths'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      WTGPart: {
        payload: Prisma.$WTGPartPayload<ExtArgs>
        fields: Prisma.WTGPartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WTGPartFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGPartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WTGPartFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGPartPayload>
          }
          findFirst: {
            args: Prisma.WTGPartFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGPartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WTGPartFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGPartPayload>
          }
          findMany: {
            args: Prisma.WTGPartFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGPartPayload>[]
          }
          create: {
            args: Prisma.WTGPartCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGPartPayload>
          }
          createMany: {
            args: Prisma.WTGPartCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WTGPartDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGPartPayload>
          }
          update: {
            args: Prisma.WTGPartUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGPartPayload>
          }
          deleteMany: {
            args: Prisma.WTGPartDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WTGPartUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WTGPartUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGPartPayload>
          }
          aggregate: {
            args: Prisma.WTGPartAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWTGPart>
          }
          groupBy: {
            args: Prisma.WTGPartGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WTGPartGroupByOutputType>[]
          }
          count: {
            args: Prisma.WTGPartCountArgs<ExtArgs>,
            result: $Utils.Optional<WTGPartCountAggregateOutputType> | number
          }
        }
      }
      WTGDoor: {
        payload: Prisma.$WTGDoorPayload<ExtArgs>
        fields: Prisma.WTGDoorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WTGDoorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGDoorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WTGDoorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGDoorPayload>
          }
          findFirst: {
            args: Prisma.WTGDoorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGDoorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WTGDoorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGDoorPayload>
          }
          findMany: {
            args: Prisma.WTGDoorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGDoorPayload>[]
          }
          create: {
            args: Prisma.WTGDoorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGDoorPayload>
          }
          createMany: {
            args: Prisma.WTGDoorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WTGDoorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGDoorPayload>
          }
          update: {
            args: Prisma.WTGDoorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGDoorPayload>
          }
          deleteMany: {
            args: Prisma.WTGDoorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WTGDoorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WTGDoorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WTGDoorPayload>
          }
          aggregate: {
            args: Prisma.WTGDoorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWTGDoor>
          }
          groupBy: {
            args: Prisma.WTGDoorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WTGDoorGroupByOutputType>[]
          }
          count: {
            args: Prisma.WTGDoorCountArgs<ExtArgs>,
            result: $Utils.Optional<WTGDoorCountAggregateOutputType> | number
          }
        }
      }
      Archive: {
        payload: Prisma.$ArchivePayload<ExtArgs>
        fields: Prisma.ArchiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchiveFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchiveFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          findFirst: {
            args: Prisma.ArchiveFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchiveFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          findMany: {
            args: Prisma.ArchiveFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>[]
          }
          create: {
            args: Prisma.ArchiveCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          createMany: {
            args: Prisma.ArchiveCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArchiveDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          update: {
            args: Prisma.ArchiveUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          deleteMany: {
            args: Prisma.ArchiveDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArchiveUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArchiveUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          aggregate: {
            args: Prisma.ArchiveAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArchive>
          }
          groupBy: {
            args: Prisma.ArchiveGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArchiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArchiveCountArgs<ExtArgs>,
            result: $Utils.Optional<ArchiveCountAggregateOutputType> | number
          }
        }
      }
      UploadItem: {
        payload: Prisma.$UploadItemPayload<ExtArgs>
        fields: Prisma.UploadItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadItemPayload>
          }
          findFirst: {
            args: Prisma.UploadItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadItemPayload>
          }
          findMany: {
            args: Prisma.UploadItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadItemPayload>[]
          }
          create: {
            args: Prisma.UploadItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadItemPayload>
          }
          createMany: {
            args: Prisma.UploadItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UploadItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadItemPayload>
          }
          update: {
            args: Prisma.UploadItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadItemPayload>
          }
          deleteMany: {
            args: Prisma.UploadItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UploadItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UploadItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UploadItemPayload>
          }
          aggregate: {
            args: Prisma.UploadItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUploadItem>
          }
          groupBy: {
            args: Prisma.UploadItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UploadItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadItemCountArgs<ExtArgs>,
            result: $Utils.Optional<UploadItemCountAggregateOutputType> | number
          }
        }
      }
      ScoresPaths: {
        payload: Prisma.$ScoresPathsPayload<ExtArgs>
        fields: Prisma.ScoresPathsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoresPathsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoresPathsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoresPathsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoresPathsPayload>
          }
          findFirst: {
            args: Prisma.ScoresPathsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoresPathsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoresPathsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoresPathsPayload>
          }
          findMany: {
            args: Prisma.ScoresPathsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoresPathsPayload>[]
          }
          create: {
            args: Prisma.ScoresPathsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoresPathsPayload>
          }
          createMany: {
            args: Prisma.ScoresPathsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ScoresPathsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoresPathsPayload>
          }
          update: {
            args: Prisma.ScoresPathsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoresPathsPayload>
          }
          deleteMany: {
            args: Prisma.ScoresPathsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ScoresPathsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ScoresPathsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoresPathsPayload>
          }
          aggregate: {
            args: Prisma.ScoresPathsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScoresPaths>
          }
          groupBy: {
            args: Prisma.ScoresPathsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScoresPathsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoresPathsCountArgs<ExtArgs>,
            result: $Utils.Optional<ScoresPathsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model WTGPart
   */

  export type AggregateWTGPart = {
    _count: WTGPartCountAggregateOutputType | null
    _min: WTGPartMinAggregateOutputType | null
    _max: WTGPartMaxAggregateOutputType | null
  }

  export type WTGPartMinAggregateOutputType = {
    id: string | null
    name: string | null
    wtg: string | null
    site: string | null
    status: string | null
  }

  export type WTGPartMaxAggregateOutputType = {
    id: string | null
    name: string | null
    wtg: string | null
    site: string | null
    status: string | null
  }

  export type WTGPartCountAggregateOutputType = {
    id: number
    name: number
    wtg: number
    site: number
    status: number
    _all: number
  }


  export type WTGPartMinAggregateInputType = {
    id?: true
    name?: true
    wtg?: true
    site?: true
    status?: true
  }

  export type WTGPartMaxAggregateInputType = {
    id?: true
    name?: true
    wtg?: true
    site?: true
    status?: true
  }

  export type WTGPartCountAggregateInputType = {
    id?: true
    name?: true
    wtg?: true
    site?: true
    status?: true
    _all?: true
  }

  export type WTGPartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WTGPart to aggregate.
     */
    where?: WTGPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WTGParts to fetch.
     */
    orderBy?: WTGPartOrderByWithRelationInput | WTGPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WTGPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WTGParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WTGParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WTGParts
    **/
    _count?: true | WTGPartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WTGPartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WTGPartMaxAggregateInputType
  }

  export type GetWTGPartAggregateType<T extends WTGPartAggregateArgs> = {
        [P in keyof T & keyof AggregateWTGPart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWTGPart[P]>
      : GetScalarType<T[P], AggregateWTGPart[P]>
  }




  export type WTGPartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WTGPartWhereInput
    orderBy?: WTGPartOrderByWithAggregationInput | WTGPartOrderByWithAggregationInput[]
    by: WTGPartScalarFieldEnum[] | WTGPartScalarFieldEnum
    having?: WTGPartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WTGPartCountAggregateInputType | true
    _min?: WTGPartMinAggregateInputType
    _max?: WTGPartMaxAggregateInputType
  }

  export type WTGPartGroupByOutputType = {
    id: string
    name: string | null
    wtg: string | null
    site: string | null
    status: string | null
    _count: WTGPartCountAggregateOutputType | null
    _min: WTGPartMinAggregateOutputType | null
    _max: WTGPartMaxAggregateOutputType | null
  }

  type GetWTGPartGroupByPayload<T extends WTGPartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WTGPartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WTGPartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WTGPartGroupByOutputType[P]>
            : GetScalarType<T[P], WTGPartGroupByOutputType[P]>
        }
      >
    >


  export type WTGPartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    wtg?: boolean
    site?: boolean
    status?: boolean
  }, ExtArgs["result"]["wTGPart"]>

  export type WTGPartSelectScalar = {
    id?: boolean
    name?: boolean
    wtg?: boolean
    site?: boolean
    status?: boolean
  }


  export type $WTGPartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WTGPart"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      wtg: string | null
      site: string | null
      status: string | null
    }, ExtArgs["result"]["wTGPart"]>
    composites: {}
  }


  type WTGPartGetPayload<S extends boolean | null | undefined | WTGPartDefaultArgs> = $Result.GetResult<Prisma.$WTGPartPayload, S>

  type WTGPartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WTGPartFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WTGPartCountAggregateInputType | true
    }

  export interface WTGPartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WTGPart'], meta: { name: 'WTGPart' } }
    /**
     * Find zero or one WTGPart that matches the filter.
     * @param {WTGPartFindUniqueArgs} args - Arguments to find a WTGPart
     * @example
     * // Get one WTGPart
     * const wTGPart = await prisma.wTGPart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WTGPartFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WTGPartFindUniqueArgs<ExtArgs>>
    ): Prisma__WTGPartClient<$Result.GetResult<Prisma.$WTGPartPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WTGPart that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WTGPartFindUniqueOrThrowArgs} args - Arguments to find a WTGPart
     * @example
     * // Get one WTGPart
     * const wTGPart = await prisma.wTGPart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WTGPartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGPartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WTGPartClient<$Result.GetResult<Prisma.$WTGPartPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WTGPart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGPartFindFirstArgs} args - Arguments to find a WTGPart
     * @example
     * // Get one WTGPart
     * const wTGPart = await prisma.wTGPart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WTGPartFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGPartFindFirstArgs<ExtArgs>>
    ): Prisma__WTGPartClient<$Result.GetResult<Prisma.$WTGPartPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WTGPart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGPartFindFirstOrThrowArgs} args - Arguments to find a WTGPart
     * @example
     * // Get one WTGPart
     * const wTGPart = await prisma.wTGPart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WTGPartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGPartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WTGPartClient<$Result.GetResult<Prisma.$WTGPartPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WTGParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGPartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WTGParts
     * const wTGParts = await prisma.wTGPart.findMany()
     * 
     * // Get first 10 WTGParts
     * const wTGParts = await prisma.wTGPart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wTGPartWithIdOnly = await prisma.wTGPart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WTGPartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGPartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WTGPartPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WTGPart.
     * @param {WTGPartCreateArgs} args - Arguments to create a WTGPart.
     * @example
     * // Create one WTGPart
     * const WTGPart = await prisma.wTGPart.create({
     *   data: {
     *     // ... data to create a WTGPart
     *   }
     * })
     * 
    **/
    create<T extends WTGPartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WTGPartCreateArgs<ExtArgs>>
    ): Prisma__WTGPartClient<$Result.GetResult<Prisma.$WTGPartPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WTGParts.
     *     @param {WTGPartCreateManyArgs} args - Arguments to create many WTGParts.
     *     @example
     *     // Create many WTGParts
     *     const wTGPart = await prisma.wTGPart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WTGPartCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGPartCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WTGPart.
     * @param {WTGPartDeleteArgs} args - Arguments to delete one WTGPart.
     * @example
     * // Delete one WTGPart
     * const WTGPart = await prisma.wTGPart.delete({
     *   where: {
     *     // ... filter to delete one WTGPart
     *   }
     * })
     * 
    **/
    delete<T extends WTGPartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WTGPartDeleteArgs<ExtArgs>>
    ): Prisma__WTGPartClient<$Result.GetResult<Prisma.$WTGPartPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WTGPart.
     * @param {WTGPartUpdateArgs} args - Arguments to update one WTGPart.
     * @example
     * // Update one WTGPart
     * const wTGPart = await prisma.wTGPart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WTGPartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WTGPartUpdateArgs<ExtArgs>>
    ): Prisma__WTGPartClient<$Result.GetResult<Prisma.$WTGPartPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WTGParts.
     * @param {WTGPartDeleteManyArgs} args - Arguments to filter WTGParts to delete.
     * @example
     * // Delete a few WTGParts
     * const { count } = await prisma.wTGPart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WTGPartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGPartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WTGParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGPartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WTGParts
     * const wTGPart = await prisma.wTGPart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WTGPartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WTGPartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WTGPart.
     * @param {WTGPartUpsertArgs} args - Arguments to update or create a WTGPart.
     * @example
     * // Update or create a WTGPart
     * const wTGPart = await prisma.wTGPart.upsert({
     *   create: {
     *     // ... data to create a WTGPart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WTGPart we want to update
     *   }
     * })
    **/
    upsert<T extends WTGPartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WTGPartUpsertArgs<ExtArgs>>
    ): Prisma__WTGPartClient<$Result.GetResult<Prisma.$WTGPartPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WTGParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGPartCountArgs} args - Arguments to filter WTGParts to count.
     * @example
     * // Count the number of WTGParts
     * const count = await prisma.wTGPart.count({
     *   where: {
     *     // ... the filter for the WTGParts we want to count
     *   }
     * })
    **/
    count<T extends WTGPartCountArgs>(
      args?: Subset<T, WTGPartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WTGPartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WTGPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGPartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WTGPartAggregateArgs>(args: Subset<T, WTGPartAggregateArgs>): Prisma.PrismaPromise<GetWTGPartAggregateType<T>>

    /**
     * Group by WTGPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGPartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WTGPartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WTGPartGroupByArgs['orderBy'] }
        : { orderBy?: WTGPartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WTGPartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWTGPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WTGPart model
   */
  readonly fields: WTGPartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WTGPart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WTGPartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WTGPart model
   */ 
  interface WTGPartFieldRefs {
    readonly id: FieldRef<"WTGPart", 'String'>
    readonly name: FieldRef<"WTGPart", 'String'>
    readonly wtg: FieldRef<"WTGPart", 'String'>
    readonly site: FieldRef<"WTGPart", 'String'>
    readonly status: FieldRef<"WTGPart", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WTGPart findUnique
   */
  export type WTGPartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGPart
     */
    select?: WTGPartSelect<ExtArgs> | null
    /**
     * Filter, which WTGPart to fetch.
     */
    where: WTGPartWhereUniqueInput
  }


  /**
   * WTGPart findUniqueOrThrow
   */
  export type WTGPartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGPart
     */
    select?: WTGPartSelect<ExtArgs> | null
    /**
     * Filter, which WTGPart to fetch.
     */
    where: WTGPartWhereUniqueInput
  }


  /**
   * WTGPart findFirst
   */
  export type WTGPartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGPart
     */
    select?: WTGPartSelect<ExtArgs> | null
    /**
     * Filter, which WTGPart to fetch.
     */
    where?: WTGPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WTGParts to fetch.
     */
    orderBy?: WTGPartOrderByWithRelationInput | WTGPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WTGParts.
     */
    cursor?: WTGPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WTGParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WTGParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WTGParts.
     */
    distinct?: WTGPartScalarFieldEnum | WTGPartScalarFieldEnum[]
  }


  /**
   * WTGPart findFirstOrThrow
   */
  export type WTGPartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGPart
     */
    select?: WTGPartSelect<ExtArgs> | null
    /**
     * Filter, which WTGPart to fetch.
     */
    where?: WTGPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WTGParts to fetch.
     */
    orderBy?: WTGPartOrderByWithRelationInput | WTGPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WTGParts.
     */
    cursor?: WTGPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WTGParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WTGParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WTGParts.
     */
    distinct?: WTGPartScalarFieldEnum | WTGPartScalarFieldEnum[]
  }


  /**
   * WTGPart findMany
   */
  export type WTGPartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGPart
     */
    select?: WTGPartSelect<ExtArgs> | null
    /**
     * Filter, which WTGParts to fetch.
     */
    where?: WTGPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WTGParts to fetch.
     */
    orderBy?: WTGPartOrderByWithRelationInput | WTGPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WTGParts.
     */
    cursor?: WTGPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WTGParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WTGParts.
     */
    skip?: number
    distinct?: WTGPartScalarFieldEnum | WTGPartScalarFieldEnum[]
  }


  /**
   * WTGPart create
   */
  export type WTGPartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGPart
     */
    select?: WTGPartSelect<ExtArgs> | null
    /**
     * The data needed to create a WTGPart.
     */
    data?: XOR<WTGPartCreateInput, WTGPartUncheckedCreateInput>
  }


  /**
   * WTGPart createMany
   */
  export type WTGPartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WTGParts.
     */
    data: WTGPartCreateManyInput | WTGPartCreateManyInput[]
  }


  /**
   * WTGPart update
   */
  export type WTGPartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGPart
     */
    select?: WTGPartSelect<ExtArgs> | null
    /**
     * The data needed to update a WTGPart.
     */
    data: XOR<WTGPartUpdateInput, WTGPartUncheckedUpdateInput>
    /**
     * Choose, which WTGPart to update.
     */
    where: WTGPartWhereUniqueInput
  }


  /**
   * WTGPart updateMany
   */
  export type WTGPartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WTGParts.
     */
    data: XOR<WTGPartUpdateManyMutationInput, WTGPartUncheckedUpdateManyInput>
    /**
     * Filter which WTGParts to update
     */
    where?: WTGPartWhereInput
  }


  /**
   * WTGPart upsert
   */
  export type WTGPartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGPart
     */
    select?: WTGPartSelect<ExtArgs> | null
    /**
     * The filter to search for the WTGPart to update in case it exists.
     */
    where: WTGPartWhereUniqueInput
    /**
     * In case the WTGPart found by the `where` argument doesn't exist, create a new WTGPart with this data.
     */
    create: XOR<WTGPartCreateInput, WTGPartUncheckedCreateInput>
    /**
     * In case the WTGPart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WTGPartUpdateInput, WTGPartUncheckedUpdateInput>
  }


  /**
   * WTGPart delete
   */
  export type WTGPartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGPart
     */
    select?: WTGPartSelect<ExtArgs> | null
    /**
     * Filter which WTGPart to delete.
     */
    where: WTGPartWhereUniqueInput
  }


  /**
   * WTGPart deleteMany
   */
  export type WTGPartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WTGParts to delete
     */
    where?: WTGPartWhereInput
  }


  /**
   * WTGPart without action
   */
  export type WTGPartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGPart
     */
    select?: WTGPartSelect<ExtArgs> | null
  }



  /**
   * Model WTGDoor
   */

  export type AggregateWTGDoor = {
    _count: WTGDoorCountAggregateOutputType | null
    _min: WTGDoorMinAggregateOutputType | null
    _max: WTGDoorMaxAggregateOutputType | null
  }

  export type WTGDoorMinAggregateOutputType = {
    id: string | null
    wtg: string | null
    site: string | null
    door_path: string | null
    status: string | null
  }

  export type WTGDoorMaxAggregateOutputType = {
    id: string | null
    wtg: string | null
    site: string | null
    door_path: string | null
    status: string | null
  }

  export type WTGDoorCountAggregateOutputType = {
    id: number
    wtg: number
    site: number
    door_path: number
    status: number
    _all: number
  }


  export type WTGDoorMinAggregateInputType = {
    id?: true
    wtg?: true
    site?: true
    door_path?: true
    status?: true
  }

  export type WTGDoorMaxAggregateInputType = {
    id?: true
    wtg?: true
    site?: true
    door_path?: true
    status?: true
  }

  export type WTGDoorCountAggregateInputType = {
    id?: true
    wtg?: true
    site?: true
    door_path?: true
    status?: true
    _all?: true
  }

  export type WTGDoorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WTGDoor to aggregate.
     */
    where?: WTGDoorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WTGDoors to fetch.
     */
    orderBy?: WTGDoorOrderByWithRelationInput | WTGDoorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WTGDoorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WTGDoors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WTGDoors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WTGDoors
    **/
    _count?: true | WTGDoorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WTGDoorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WTGDoorMaxAggregateInputType
  }

  export type GetWTGDoorAggregateType<T extends WTGDoorAggregateArgs> = {
        [P in keyof T & keyof AggregateWTGDoor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWTGDoor[P]>
      : GetScalarType<T[P], AggregateWTGDoor[P]>
  }




  export type WTGDoorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WTGDoorWhereInput
    orderBy?: WTGDoorOrderByWithAggregationInput | WTGDoorOrderByWithAggregationInput[]
    by: WTGDoorScalarFieldEnum[] | WTGDoorScalarFieldEnum
    having?: WTGDoorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WTGDoorCountAggregateInputType | true
    _min?: WTGDoorMinAggregateInputType
    _max?: WTGDoorMaxAggregateInputType
  }

  export type WTGDoorGroupByOutputType = {
    id: string
    wtg: string | null
    site: string | null
    door_path: string | null
    status: string | null
    _count: WTGDoorCountAggregateOutputType | null
    _min: WTGDoorMinAggregateOutputType | null
    _max: WTGDoorMaxAggregateOutputType | null
  }

  type GetWTGDoorGroupByPayload<T extends WTGDoorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WTGDoorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WTGDoorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WTGDoorGroupByOutputType[P]>
            : GetScalarType<T[P], WTGDoorGroupByOutputType[P]>
        }
      >
    >


  export type WTGDoorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wtg?: boolean
    site?: boolean
    door_path?: boolean
    status?: boolean
  }, ExtArgs["result"]["wTGDoor"]>

  export type WTGDoorSelectScalar = {
    id?: boolean
    wtg?: boolean
    site?: boolean
    door_path?: boolean
    status?: boolean
  }


  export type $WTGDoorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WTGDoor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wtg: string | null
      site: string | null
      door_path: string | null
      status: string | null
    }, ExtArgs["result"]["wTGDoor"]>
    composites: {}
  }


  type WTGDoorGetPayload<S extends boolean | null | undefined | WTGDoorDefaultArgs> = $Result.GetResult<Prisma.$WTGDoorPayload, S>

  type WTGDoorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WTGDoorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WTGDoorCountAggregateInputType | true
    }

  export interface WTGDoorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WTGDoor'], meta: { name: 'WTGDoor' } }
    /**
     * Find zero or one WTGDoor that matches the filter.
     * @param {WTGDoorFindUniqueArgs} args - Arguments to find a WTGDoor
     * @example
     * // Get one WTGDoor
     * const wTGDoor = await prisma.wTGDoor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WTGDoorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WTGDoorFindUniqueArgs<ExtArgs>>
    ): Prisma__WTGDoorClient<$Result.GetResult<Prisma.$WTGDoorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WTGDoor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WTGDoorFindUniqueOrThrowArgs} args - Arguments to find a WTGDoor
     * @example
     * // Get one WTGDoor
     * const wTGDoor = await prisma.wTGDoor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WTGDoorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGDoorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WTGDoorClient<$Result.GetResult<Prisma.$WTGDoorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WTGDoor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGDoorFindFirstArgs} args - Arguments to find a WTGDoor
     * @example
     * // Get one WTGDoor
     * const wTGDoor = await prisma.wTGDoor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WTGDoorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGDoorFindFirstArgs<ExtArgs>>
    ): Prisma__WTGDoorClient<$Result.GetResult<Prisma.$WTGDoorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WTGDoor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGDoorFindFirstOrThrowArgs} args - Arguments to find a WTGDoor
     * @example
     * // Get one WTGDoor
     * const wTGDoor = await prisma.wTGDoor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WTGDoorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGDoorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WTGDoorClient<$Result.GetResult<Prisma.$WTGDoorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WTGDoors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGDoorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WTGDoors
     * const wTGDoors = await prisma.wTGDoor.findMany()
     * 
     * // Get first 10 WTGDoors
     * const wTGDoors = await prisma.wTGDoor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wTGDoorWithIdOnly = await prisma.wTGDoor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WTGDoorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGDoorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WTGDoorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WTGDoor.
     * @param {WTGDoorCreateArgs} args - Arguments to create a WTGDoor.
     * @example
     * // Create one WTGDoor
     * const WTGDoor = await prisma.wTGDoor.create({
     *   data: {
     *     // ... data to create a WTGDoor
     *   }
     * })
     * 
    **/
    create<T extends WTGDoorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WTGDoorCreateArgs<ExtArgs>>
    ): Prisma__WTGDoorClient<$Result.GetResult<Prisma.$WTGDoorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WTGDoors.
     *     @param {WTGDoorCreateManyArgs} args - Arguments to create many WTGDoors.
     *     @example
     *     // Create many WTGDoors
     *     const wTGDoor = await prisma.wTGDoor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WTGDoorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGDoorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WTGDoor.
     * @param {WTGDoorDeleteArgs} args - Arguments to delete one WTGDoor.
     * @example
     * // Delete one WTGDoor
     * const WTGDoor = await prisma.wTGDoor.delete({
     *   where: {
     *     // ... filter to delete one WTGDoor
     *   }
     * })
     * 
    **/
    delete<T extends WTGDoorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WTGDoorDeleteArgs<ExtArgs>>
    ): Prisma__WTGDoorClient<$Result.GetResult<Prisma.$WTGDoorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WTGDoor.
     * @param {WTGDoorUpdateArgs} args - Arguments to update one WTGDoor.
     * @example
     * // Update one WTGDoor
     * const wTGDoor = await prisma.wTGDoor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WTGDoorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WTGDoorUpdateArgs<ExtArgs>>
    ): Prisma__WTGDoorClient<$Result.GetResult<Prisma.$WTGDoorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WTGDoors.
     * @param {WTGDoorDeleteManyArgs} args - Arguments to filter WTGDoors to delete.
     * @example
     * // Delete a few WTGDoors
     * const { count } = await prisma.wTGDoor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WTGDoorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WTGDoorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WTGDoors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGDoorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WTGDoors
     * const wTGDoor = await prisma.wTGDoor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WTGDoorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WTGDoorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WTGDoor.
     * @param {WTGDoorUpsertArgs} args - Arguments to update or create a WTGDoor.
     * @example
     * // Update or create a WTGDoor
     * const wTGDoor = await prisma.wTGDoor.upsert({
     *   create: {
     *     // ... data to create a WTGDoor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WTGDoor we want to update
     *   }
     * })
    **/
    upsert<T extends WTGDoorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WTGDoorUpsertArgs<ExtArgs>>
    ): Prisma__WTGDoorClient<$Result.GetResult<Prisma.$WTGDoorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WTGDoors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGDoorCountArgs} args - Arguments to filter WTGDoors to count.
     * @example
     * // Count the number of WTGDoors
     * const count = await prisma.wTGDoor.count({
     *   where: {
     *     // ... the filter for the WTGDoors we want to count
     *   }
     * })
    **/
    count<T extends WTGDoorCountArgs>(
      args?: Subset<T, WTGDoorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WTGDoorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WTGDoor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGDoorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WTGDoorAggregateArgs>(args: Subset<T, WTGDoorAggregateArgs>): Prisma.PrismaPromise<GetWTGDoorAggregateType<T>>

    /**
     * Group by WTGDoor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WTGDoorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WTGDoorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WTGDoorGroupByArgs['orderBy'] }
        : { orderBy?: WTGDoorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WTGDoorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWTGDoorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WTGDoor model
   */
  readonly fields: WTGDoorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WTGDoor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WTGDoorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WTGDoor model
   */ 
  interface WTGDoorFieldRefs {
    readonly id: FieldRef<"WTGDoor", 'String'>
    readonly wtg: FieldRef<"WTGDoor", 'String'>
    readonly site: FieldRef<"WTGDoor", 'String'>
    readonly door_path: FieldRef<"WTGDoor", 'String'>
    readonly status: FieldRef<"WTGDoor", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WTGDoor findUnique
   */
  export type WTGDoorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGDoor
     */
    select?: WTGDoorSelect<ExtArgs> | null
    /**
     * Filter, which WTGDoor to fetch.
     */
    where: WTGDoorWhereUniqueInput
  }


  /**
   * WTGDoor findUniqueOrThrow
   */
  export type WTGDoorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGDoor
     */
    select?: WTGDoorSelect<ExtArgs> | null
    /**
     * Filter, which WTGDoor to fetch.
     */
    where: WTGDoorWhereUniqueInput
  }


  /**
   * WTGDoor findFirst
   */
  export type WTGDoorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGDoor
     */
    select?: WTGDoorSelect<ExtArgs> | null
    /**
     * Filter, which WTGDoor to fetch.
     */
    where?: WTGDoorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WTGDoors to fetch.
     */
    orderBy?: WTGDoorOrderByWithRelationInput | WTGDoorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WTGDoors.
     */
    cursor?: WTGDoorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WTGDoors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WTGDoors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WTGDoors.
     */
    distinct?: WTGDoorScalarFieldEnum | WTGDoorScalarFieldEnum[]
  }


  /**
   * WTGDoor findFirstOrThrow
   */
  export type WTGDoorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGDoor
     */
    select?: WTGDoorSelect<ExtArgs> | null
    /**
     * Filter, which WTGDoor to fetch.
     */
    where?: WTGDoorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WTGDoors to fetch.
     */
    orderBy?: WTGDoorOrderByWithRelationInput | WTGDoorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WTGDoors.
     */
    cursor?: WTGDoorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WTGDoors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WTGDoors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WTGDoors.
     */
    distinct?: WTGDoorScalarFieldEnum | WTGDoorScalarFieldEnum[]
  }


  /**
   * WTGDoor findMany
   */
  export type WTGDoorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGDoor
     */
    select?: WTGDoorSelect<ExtArgs> | null
    /**
     * Filter, which WTGDoors to fetch.
     */
    where?: WTGDoorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WTGDoors to fetch.
     */
    orderBy?: WTGDoorOrderByWithRelationInput | WTGDoorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WTGDoors.
     */
    cursor?: WTGDoorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WTGDoors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WTGDoors.
     */
    skip?: number
    distinct?: WTGDoorScalarFieldEnum | WTGDoorScalarFieldEnum[]
  }


  /**
   * WTGDoor create
   */
  export type WTGDoorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGDoor
     */
    select?: WTGDoorSelect<ExtArgs> | null
    /**
     * The data needed to create a WTGDoor.
     */
    data?: XOR<WTGDoorCreateInput, WTGDoorUncheckedCreateInput>
  }


  /**
   * WTGDoor createMany
   */
  export type WTGDoorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WTGDoors.
     */
    data: WTGDoorCreateManyInput | WTGDoorCreateManyInput[]
  }


  /**
   * WTGDoor update
   */
  export type WTGDoorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGDoor
     */
    select?: WTGDoorSelect<ExtArgs> | null
    /**
     * The data needed to update a WTGDoor.
     */
    data: XOR<WTGDoorUpdateInput, WTGDoorUncheckedUpdateInput>
    /**
     * Choose, which WTGDoor to update.
     */
    where: WTGDoorWhereUniqueInput
  }


  /**
   * WTGDoor updateMany
   */
  export type WTGDoorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WTGDoors.
     */
    data: XOR<WTGDoorUpdateManyMutationInput, WTGDoorUncheckedUpdateManyInput>
    /**
     * Filter which WTGDoors to update
     */
    where?: WTGDoorWhereInput
  }


  /**
   * WTGDoor upsert
   */
  export type WTGDoorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGDoor
     */
    select?: WTGDoorSelect<ExtArgs> | null
    /**
     * The filter to search for the WTGDoor to update in case it exists.
     */
    where: WTGDoorWhereUniqueInput
    /**
     * In case the WTGDoor found by the `where` argument doesn't exist, create a new WTGDoor with this data.
     */
    create: XOR<WTGDoorCreateInput, WTGDoorUncheckedCreateInput>
    /**
     * In case the WTGDoor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WTGDoorUpdateInput, WTGDoorUncheckedUpdateInput>
  }


  /**
   * WTGDoor delete
   */
  export type WTGDoorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGDoor
     */
    select?: WTGDoorSelect<ExtArgs> | null
    /**
     * Filter which WTGDoor to delete.
     */
    where: WTGDoorWhereUniqueInput
  }


  /**
   * WTGDoor deleteMany
   */
  export type WTGDoorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WTGDoors to delete
     */
    where?: WTGDoorWhereInput
  }


  /**
   * WTGDoor without action
   */
  export type WTGDoorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WTGDoor
     */
    select?: WTGDoorSelect<ExtArgs> | null
  }



  /**
   * Model Archive
   */

  export type AggregateArchive = {
    _count: ArchiveCountAggregateOutputType | null
    _min: ArchiveMinAggregateOutputType | null
    _max: ArchiveMaxAggregateOutputType | null
  }

  export type ArchiveMinAggregateOutputType = {
    id: string | null
    part: string | null
    wtg: string | null
    site: string | null
    path: string | null
    status: string | null
    size: string | null
    uploaded: string | null
    upload_time: string | null
  }

  export type ArchiveMaxAggregateOutputType = {
    id: string | null
    part: string | null
    wtg: string | null
    site: string | null
    path: string | null
    status: string | null
    size: string | null
    uploaded: string | null
    upload_time: string | null
  }

  export type ArchiveCountAggregateOutputType = {
    id: number
    part: number
    wtg: number
    site: number
    path: number
    status: number
    size: number
    uploaded: number
    upload_time: number
    _all: number
  }


  export type ArchiveMinAggregateInputType = {
    id?: true
    part?: true
    wtg?: true
    site?: true
    path?: true
    status?: true
    size?: true
    uploaded?: true
    upload_time?: true
  }

  export type ArchiveMaxAggregateInputType = {
    id?: true
    part?: true
    wtg?: true
    site?: true
    path?: true
    status?: true
    size?: true
    uploaded?: true
    upload_time?: true
  }

  export type ArchiveCountAggregateInputType = {
    id?: true
    part?: true
    wtg?: true
    site?: true
    path?: true
    status?: true
    size?: true
    uploaded?: true
    upload_time?: true
    _all?: true
  }

  export type ArchiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archive to aggregate.
     */
    where?: ArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archives to fetch.
     */
    orderBy?: ArchiveOrderByWithRelationInput | ArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Archives
    **/
    _count?: true | ArchiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchiveMaxAggregateInputType
  }

  export type GetArchiveAggregateType<T extends ArchiveAggregateArgs> = {
        [P in keyof T & keyof AggregateArchive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchive[P]>
      : GetScalarType<T[P], AggregateArchive[P]>
  }




  export type ArchiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchiveWhereInput
    orderBy?: ArchiveOrderByWithAggregationInput | ArchiveOrderByWithAggregationInput[]
    by: ArchiveScalarFieldEnum[] | ArchiveScalarFieldEnum
    having?: ArchiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchiveCountAggregateInputType | true
    _min?: ArchiveMinAggregateInputType
    _max?: ArchiveMaxAggregateInputType
  }

  export type ArchiveGroupByOutputType = {
    id: string
    part: string | null
    wtg: string | null
    site: string | null
    path: string | null
    status: string | null
    size: string | null
    uploaded: string | null
    upload_time: string | null
    _count: ArchiveCountAggregateOutputType | null
    _min: ArchiveMinAggregateOutputType | null
    _max: ArchiveMaxAggregateOutputType | null
  }

  type GetArchiveGroupByPayload<T extends ArchiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchiveGroupByOutputType[P]>
            : GetScalarType<T[P], ArchiveGroupByOutputType[P]>
        }
      >
    >


  export type ArchiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    part?: boolean
    wtg?: boolean
    site?: boolean
    path?: boolean
    status?: boolean
    size?: boolean
    uploaded?: boolean
    upload_time?: boolean
  }, ExtArgs["result"]["archive"]>

  export type ArchiveSelectScalar = {
    id?: boolean
    part?: boolean
    wtg?: boolean
    site?: boolean
    path?: boolean
    status?: boolean
    size?: boolean
    uploaded?: boolean
    upload_time?: boolean
  }


  export type $ArchivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Archive"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      part: string | null
      wtg: string | null
      site: string | null
      path: string | null
      status: string | null
      size: string | null
      uploaded: string | null
      upload_time: string | null
    }, ExtArgs["result"]["archive"]>
    composites: {}
  }


  type ArchiveGetPayload<S extends boolean | null | undefined | ArchiveDefaultArgs> = $Result.GetResult<Prisma.$ArchivePayload, S>

  type ArchiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArchiveFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArchiveCountAggregateInputType | true
    }

  export interface ArchiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Archive'], meta: { name: 'Archive' } }
    /**
     * Find zero or one Archive that matches the filter.
     * @param {ArchiveFindUniqueArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArchiveFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArchiveFindUniqueArgs<ExtArgs>>
    ): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Archive that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArchiveFindUniqueOrThrowArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArchiveFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchiveFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Archive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveFindFirstArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArchiveFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchiveFindFirstArgs<ExtArgs>>
    ): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Archive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveFindFirstOrThrowArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArchiveFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchiveFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Archives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archives
     * const archives = await prisma.archive.findMany()
     * 
     * // Get first 10 Archives
     * const archives = await prisma.archive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archiveWithIdOnly = await prisma.archive.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArchiveFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchiveFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Archive.
     * @param {ArchiveCreateArgs} args - Arguments to create a Archive.
     * @example
     * // Create one Archive
     * const Archive = await prisma.archive.create({
     *   data: {
     *     // ... data to create a Archive
     *   }
     * })
     * 
    **/
    create<T extends ArchiveCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArchiveCreateArgs<ExtArgs>>
    ): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Archives.
     *     @param {ArchiveCreateManyArgs} args - Arguments to create many Archives.
     *     @example
     *     // Create many Archives
     *     const archive = await prisma.archive.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArchiveCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchiveCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Archive.
     * @param {ArchiveDeleteArgs} args - Arguments to delete one Archive.
     * @example
     * // Delete one Archive
     * const Archive = await prisma.archive.delete({
     *   where: {
     *     // ... filter to delete one Archive
     *   }
     * })
     * 
    **/
    delete<T extends ArchiveDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArchiveDeleteArgs<ExtArgs>>
    ): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Archive.
     * @param {ArchiveUpdateArgs} args - Arguments to update one Archive.
     * @example
     * // Update one Archive
     * const archive = await prisma.archive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArchiveUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArchiveUpdateArgs<ExtArgs>>
    ): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Archives.
     * @param {ArchiveDeleteManyArgs} args - Arguments to filter Archives to delete.
     * @example
     * // Delete a few Archives
     * const { count } = await prisma.archive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArchiveDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchiveDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archives
     * const archive = await prisma.archive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArchiveUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArchiveUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Archive.
     * @param {ArchiveUpsertArgs} args - Arguments to update or create a Archive.
     * @example
     * // Update or create a Archive
     * const archive = await prisma.archive.upsert({
     *   create: {
     *     // ... data to create a Archive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archive we want to update
     *   }
     * })
    **/
    upsert<T extends ArchiveUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArchiveUpsertArgs<ExtArgs>>
    ): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Archives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveCountArgs} args - Arguments to filter Archives to count.
     * @example
     * // Count the number of Archives
     * const count = await prisma.archive.count({
     *   where: {
     *     // ... the filter for the Archives we want to count
     *   }
     * })
    **/
    count<T extends ArchiveCountArgs>(
      args?: Subset<T, ArchiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArchiveAggregateArgs>(args: Subset<T, ArchiveAggregateArgs>): Prisma.PrismaPromise<GetArchiveAggregateType<T>>

    /**
     * Group by Archive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArchiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchiveGroupByArgs['orderBy'] }
        : { orderBy?: ArchiveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArchiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Archive model
   */
  readonly fields: ArchiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Archive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Archive model
   */ 
  interface ArchiveFieldRefs {
    readonly id: FieldRef<"Archive", 'String'>
    readonly part: FieldRef<"Archive", 'String'>
    readonly wtg: FieldRef<"Archive", 'String'>
    readonly site: FieldRef<"Archive", 'String'>
    readonly path: FieldRef<"Archive", 'String'>
    readonly status: FieldRef<"Archive", 'String'>
    readonly size: FieldRef<"Archive", 'String'>
    readonly uploaded: FieldRef<"Archive", 'String'>
    readonly upload_time: FieldRef<"Archive", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Archive findUnique
   */
  export type ArchiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Filter, which Archive to fetch.
     */
    where: ArchiveWhereUniqueInput
  }


  /**
   * Archive findUniqueOrThrow
   */
  export type ArchiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Filter, which Archive to fetch.
     */
    where: ArchiveWhereUniqueInput
  }


  /**
   * Archive findFirst
   */
  export type ArchiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Filter, which Archive to fetch.
     */
    where?: ArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archives to fetch.
     */
    orderBy?: ArchiveOrderByWithRelationInput | ArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archives.
     */
    cursor?: ArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archives.
     */
    distinct?: ArchiveScalarFieldEnum | ArchiveScalarFieldEnum[]
  }


  /**
   * Archive findFirstOrThrow
   */
  export type ArchiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Filter, which Archive to fetch.
     */
    where?: ArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archives to fetch.
     */
    orderBy?: ArchiveOrderByWithRelationInput | ArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archives.
     */
    cursor?: ArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archives.
     */
    distinct?: ArchiveScalarFieldEnum | ArchiveScalarFieldEnum[]
  }


  /**
   * Archive findMany
   */
  export type ArchiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Filter, which Archives to fetch.
     */
    where?: ArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archives to fetch.
     */
    orderBy?: ArchiveOrderByWithRelationInput | ArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Archives.
     */
    cursor?: ArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archives.
     */
    skip?: number
    distinct?: ArchiveScalarFieldEnum | ArchiveScalarFieldEnum[]
  }


  /**
   * Archive create
   */
  export type ArchiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * The data needed to create a Archive.
     */
    data?: XOR<ArchiveCreateInput, ArchiveUncheckedCreateInput>
  }


  /**
   * Archive createMany
   */
  export type ArchiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Archives.
     */
    data: ArchiveCreateManyInput | ArchiveCreateManyInput[]
  }


  /**
   * Archive update
   */
  export type ArchiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * The data needed to update a Archive.
     */
    data: XOR<ArchiveUpdateInput, ArchiveUncheckedUpdateInput>
    /**
     * Choose, which Archive to update.
     */
    where: ArchiveWhereUniqueInput
  }


  /**
   * Archive updateMany
   */
  export type ArchiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Archives.
     */
    data: XOR<ArchiveUpdateManyMutationInput, ArchiveUncheckedUpdateManyInput>
    /**
     * Filter which Archives to update
     */
    where?: ArchiveWhereInput
  }


  /**
   * Archive upsert
   */
  export type ArchiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * The filter to search for the Archive to update in case it exists.
     */
    where: ArchiveWhereUniqueInput
    /**
     * In case the Archive found by the `where` argument doesn't exist, create a new Archive with this data.
     */
    create: XOR<ArchiveCreateInput, ArchiveUncheckedCreateInput>
    /**
     * In case the Archive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchiveUpdateInput, ArchiveUncheckedUpdateInput>
  }


  /**
   * Archive delete
   */
  export type ArchiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Filter which Archive to delete.
     */
    where: ArchiveWhereUniqueInput
  }


  /**
   * Archive deleteMany
   */
  export type ArchiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archives to delete
     */
    where?: ArchiveWhereInput
  }


  /**
   * Archive without action
   */
  export type ArchiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
  }



  /**
   * Model UploadItem
   */

  export type AggregateUploadItem = {
    _count: UploadItemCountAggregateOutputType | null
    _min: UploadItemMinAggregateOutputType | null
    _max: UploadItemMaxAggregateOutputType | null
  }

  export type UploadItemMinAggregateOutputType = {
    id: string | null
    path: string | null
    size: string | null
    status: string | null
    uploaded: string | null
    upload_time: string | null
  }

  export type UploadItemMaxAggregateOutputType = {
    id: string | null
    path: string | null
    size: string | null
    status: string | null
    uploaded: string | null
    upload_time: string | null
  }

  export type UploadItemCountAggregateOutputType = {
    id: number
    path: number
    size: number
    status: number
    uploaded: number
    upload_time: number
    _all: number
  }


  export type UploadItemMinAggregateInputType = {
    id?: true
    path?: true
    size?: true
    status?: true
    uploaded?: true
    upload_time?: true
  }

  export type UploadItemMaxAggregateInputType = {
    id?: true
    path?: true
    size?: true
    status?: true
    uploaded?: true
    upload_time?: true
  }

  export type UploadItemCountAggregateInputType = {
    id?: true
    path?: true
    size?: true
    status?: true
    uploaded?: true
    upload_time?: true
    _all?: true
  }

  export type UploadItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadItem to aggregate.
     */
    where?: UploadItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadItems to fetch.
     */
    orderBy?: UploadItemOrderByWithRelationInput | UploadItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadItems
    **/
    _count?: true | UploadItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadItemMaxAggregateInputType
  }

  export type GetUploadItemAggregateType<T extends UploadItemAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadItem[P]>
      : GetScalarType<T[P], AggregateUploadItem[P]>
  }




  export type UploadItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadItemWhereInput
    orderBy?: UploadItemOrderByWithAggregationInput | UploadItemOrderByWithAggregationInput[]
    by: UploadItemScalarFieldEnum[] | UploadItemScalarFieldEnum
    having?: UploadItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadItemCountAggregateInputType | true
    _min?: UploadItemMinAggregateInputType
    _max?: UploadItemMaxAggregateInputType
  }

  export type UploadItemGroupByOutputType = {
    id: string
    path: string | null
    size: string | null
    status: string | null
    uploaded: string | null
    upload_time: string | null
    _count: UploadItemCountAggregateOutputType | null
    _min: UploadItemMinAggregateOutputType | null
    _max: UploadItemMaxAggregateOutputType | null
  }

  type GetUploadItemGroupByPayload<T extends UploadItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadItemGroupByOutputType[P]>
            : GetScalarType<T[P], UploadItemGroupByOutputType[P]>
        }
      >
    >


  export type UploadItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    size?: boolean
    status?: boolean
    uploaded?: boolean
    upload_time?: boolean
  }, ExtArgs["result"]["uploadItem"]>

  export type UploadItemSelectScalar = {
    id?: boolean
    path?: boolean
    size?: boolean
    status?: boolean
    uploaded?: boolean
    upload_time?: boolean
  }


  export type $UploadItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string | null
      size: string | null
      status: string | null
      uploaded: string | null
      upload_time: string | null
    }, ExtArgs["result"]["uploadItem"]>
    composites: {}
  }


  type UploadItemGetPayload<S extends boolean | null | undefined | UploadItemDefaultArgs> = $Result.GetResult<Prisma.$UploadItemPayload, S>

  type UploadItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UploadItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UploadItemCountAggregateInputType | true
    }

  export interface UploadItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadItem'], meta: { name: 'UploadItem' } }
    /**
     * Find zero or one UploadItem that matches the filter.
     * @param {UploadItemFindUniqueArgs} args - Arguments to find a UploadItem
     * @example
     * // Get one UploadItem
     * const uploadItem = await prisma.uploadItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UploadItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UploadItemFindUniqueArgs<ExtArgs>>
    ): Prisma__UploadItemClient<$Result.GetResult<Prisma.$UploadItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UploadItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UploadItemFindUniqueOrThrowArgs} args - Arguments to find a UploadItem
     * @example
     * // Get one UploadItem
     * const uploadItem = await prisma.uploadItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UploadItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UploadItemClient<$Result.GetResult<Prisma.$UploadItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UploadItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadItemFindFirstArgs} args - Arguments to find a UploadItem
     * @example
     * // Get one UploadItem
     * const uploadItem = await prisma.uploadItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UploadItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadItemFindFirstArgs<ExtArgs>>
    ): Prisma__UploadItemClient<$Result.GetResult<Prisma.$UploadItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UploadItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadItemFindFirstOrThrowArgs} args - Arguments to find a UploadItem
     * @example
     * // Get one UploadItem
     * const uploadItem = await prisma.uploadItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UploadItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UploadItemClient<$Result.GetResult<Prisma.$UploadItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UploadItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadItems
     * const uploadItems = await prisma.uploadItem.findMany()
     * 
     * // Get first 10 UploadItems
     * const uploadItems = await prisma.uploadItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadItemWithIdOnly = await prisma.uploadItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UploadItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UploadItem.
     * @param {UploadItemCreateArgs} args - Arguments to create a UploadItem.
     * @example
     * // Create one UploadItem
     * const UploadItem = await prisma.uploadItem.create({
     *   data: {
     *     // ... data to create a UploadItem
     *   }
     * })
     * 
    **/
    create<T extends UploadItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UploadItemCreateArgs<ExtArgs>>
    ): Prisma__UploadItemClient<$Result.GetResult<Prisma.$UploadItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UploadItems.
     *     @param {UploadItemCreateManyArgs} args - Arguments to create many UploadItems.
     *     @example
     *     // Create many UploadItems
     *     const uploadItem = await prisma.uploadItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UploadItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UploadItem.
     * @param {UploadItemDeleteArgs} args - Arguments to delete one UploadItem.
     * @example
     * // Delete one UploadItem
     * const UploadItem = await prisma.uploadItem.delete({
     *   where: {
     *     // ... filter to delete one UploadItem
     *   }
     * })
     * 
    **/
    delete<T extends UploadItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UploadItemDeleteArgs<ExtArgs>>
    ): Prisma__UploadItemClient<$Result.GetResult<Prisma.$UploadItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UploadItem.
     * @param {UploadItemUpdateArgs} args - Arguments to update one UploadItem.
     * @example
     * // Update one UploadItem
     * const uploadItem = await prisma.uploadItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UploadItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UploadItemUpdateArgs<ExtArgs>>
    ): Prisma__UploadItemClient<$Result.GetResult<Prisma.$UploadItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UploadItems.
     * @param {UploadItemDeleteManyArgs} args - Arguments to filter UploadItems to delete.
     * @example
     * // Delete a few UploadItems
     * const { count } = await prisma.uploadItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UploadItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UploadItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadItems
     * const uploadItem = await prisma.uploadItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UploadItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UploadItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UploadItem.
     * @param {UploadItemUpsertArgs} args - Arguments to update or create a UploadItem.
     * @example
     * // Update or create a UploadItem
     * const uploadItem = await prisma.uploadItem.upsert({
     *   create: {
     *     // ... data to create a UploadItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadItem we want to update
     *   }
     * })
    **/
    upsert<T extends UploadItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UploadItemUpsertArgs<ExtArgs>>
    ): Prisma__UploadItemClient<$Result.GetResult<Prisma.$UploadItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UploadItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadItemCountArgs} args - Arguments to filter UploadItems to count.
     * @example
     * // Count the number of UploadItems
     * const count = await prisma.uploadItem.count({
     *   where: {
     *     // ... the filter for the UploadItems we want to count
     *   }
     * })
    **/
    count<T extends UploadItemCountArgs>(
      args?: Subset<T, UploadItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadItemAggregateArgs>(args: Subset<T, UploadItemAggregateArgs>): Prisma.PrismaPromise<GetUploadItemAggregateType<T>>

    /**
     * Group by UploadItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadItemGroupByArgs['orderBy'] }
        : { orderBy?: UploadItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadItem model
   */
  readonly fields: UploadItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UploadItem model
   */ 
  interface UploadItemFieldRefs {
    readonly id: FieldRef<"UploadItem", 'String'>
    readonly path: FieldRef<"UploadItem", 'String'>
    readonly size: FieldRef<"UploadItem", 'String'>
    readonly status: FieldRef<"UploadItem", 'String'>
    readonly uploaded: FieldRef<"UploadItem", 'String'>
    readonly upload_time: FieldRef<"UploadItem", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UploadItem findUnique
   */
  export type UploadItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadItem
     */
    select?: UploadItemSelect<ExtArgs> | null
    /**
     * Filter, which UploadItem to fetch.
     */
    where: UploadItemWhereUniqueInput
  }


  /**
   * UploadItem findUniqueOrThrow
   */
  export type UploadItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadItem
     */
    select?: UploadItemSelect<ExtArgs> | null
    /**
     * Filter, which UploadItem to fetch.
     */
    where: UploadItemWhereUniqueInput
  }


  /**
   * UploadItem findFirst
   */
  export type UploadItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadItem
     */
    select?: UploadItemSelect<ExtArgs> | null
    /**
     * Filter, which UploadItem to fetch.
     */
    where?: UploadItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadItems to fetch.
     */
    orderBy?: UploadItemOrderByWithRelationInput | UploadItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadItems.
     */
    cursor?: UploadItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadItems.
     */
    distinct?: UploadItemScalarFieldEnum | UploadItemScalarFieldEnum[]
  }


  /**
   * UploadItem findFirstOrThrow
   */
  export type UploadItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadItem
     */
    select?: UploadItemSelect<ExtArgs> | null
    /**
     * Filter, which UploadItem to fetch.
     */
    where?: UploadItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadItems to fetch.
     */
    orderBy?: UploadItemOrderByWithRelationInput | UploadItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadItems.
     */
    cursor?: UploadItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadItems.
     */
    distinct?: UploadItemScalarFieldEnum | UploadItemScalarFieldEnum[]
  }


  /**
   * UploadItem findMany
   */
  export type UploadItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadItem
     */
    select?: UploadItemSelect<ExtArgs> | null
    /**
     * Filter, which UploadItems to fetch.
     */
    where?: UploadItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadItems to fetch.
     */
    orderBy?: UploadItemOrderByWithRelationInput | UploadItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadItems.
     */
    cursor?: UploadItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadItems.
     */
    skip?: number
    distinct?: UploadItemScalarFieldEnum | UploadItemScalarFieldEnum[]
  }


  /**
   * UploadItem create
   */
  export type UploadItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadItem
     */
    select?: UploadItemSelect<ExtArgs> | null
    /**
     * The data needed to create a UploadItem.
     */
    data?: XOR<UploadItemCreateInput, UploadItemUncheckedCreateInput>
  }


  /**
   * UploadItem createMany
   */
  export type UploadItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadItems.
     */
    data: UploadItemCreateManyInput | UploadItemCreateManyInput[]
  }


  /**
   * UploadItem update
   */
  export type UploadItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadItem
     */
    select?: UploadItemSelect<ExtArgs> | null
    /**
     * The data needed to update a UploadItem.
     */
    data: XOR<UploadItemUpdateInput, UploadItemUncheckedUpdateInput>
    /**
     * Choose, which UploadItem to update.
     */
    where: UploadItemWhereUniqueInput
  }


  /**
   * UploadItem updateMany
   */
  export type UploadItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadItems.
     */
    data: XOR<UploadItemUpdateManyMutationInput, UploadItemUncheckedUpdateManyInput>
    /**
     * Filter which UploadItems to update
     */
    where?: UploadItemWhereInput
  }


  /**
   * UploadItem upsert
   */
  export type UploadItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadItem
     */
    select?: UploadItemSelect<ExtArgs> | null
    /**
     * The filter to search for the UploadItem to update in case it exists.
     */
    where: UploadItemWhereUniqueInput
    /**
     * In case the UploadItem found by the `where` argument doesn't exist, create a new UploadItem with this data.
     */
    create: XOR<UploadItemCreateInput, UploadItemUncheckedCreateInput>
    /**
     * In case the UploadItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadItemUpdateInput, UploadItemUncheckedUpdateInput>
  }


  /**
   * UploadItem delete
   */
  export type UploadItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadItem
     */
    select?: UploadItemSelect<ExtArgs> | null
    /**
     * Filter which UploadItem to delete.
     */
    where: UploadItemWhereUniqueInput
  }


  /**
   * UploadItem deleteMany
   */
  export type UploadItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadItems to delete
     */
    where?: UploadItemWhereInput
  }


  /**
   * UploadItem without action
   */
  export type UploadItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadItem
     */
    select?: UploadItemSelect<ExtArgs> | null
  }



  /**
   * Model ScoresPaths
   */

  export type AggregateScoresPaths = {
    _count: ScoresPathsCountAggregateOutputType | null
    _min: ScoresPathsMinAggregateOutputType | null
    _max: ScoresPathsMaxAggregateOutputType | null
  }

  export type ScoresPathsMinAggregateOutputType = {
    id: string | null
    wtg: string | null
    site: string | null
    path: string | null
  }

  export type ScoresPathsMaxAggregateOutputType = {
    id: string | null
    wtg: string | null
    site: string | null
    path: string | null
  }

  export type ScoresPathsCountAggregateOutputType = {
    id: number
    wtg: number
    site: number
    path: number
    _all: number
  }


  export type ScoresPathsMinAggregateInputType = {
    id?: true
    wtg?: true
    site?: true
    path?: true
  }

  export type ScoresPathsMaxAggregateInputType = {
    id?: true
    wtg?: true
    site?: true
    path?: true
  }

  export type ScoresPathsCountAggregateInputType = {
    id?: true
    wtg?: true
    site?: true
    path?: true
    _all?: true
  }

  export type ScoresPathsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoresPaths to aggregate.
     */
    where?: ScoresPathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoresPaths to fetch.
     */
    orderBy?: ScoresPathsOrderByWithRelationInput | ScoresPathsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoresPathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoresPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoresPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScoresPaths
    **/
    _count?: true | ScoresPathsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoresPathsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoresPathsMaxAggregateInputType
  }

  export type GetScoresPathsAggregateType<T extends ScoresPathsAggregateArgs> = {
        [P in keyof T & keyof AggregateScoresPaths]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoresPaths[P]>
      : GetScalarType<T[P], AggregateScoresPaths[P]>
  }




  export type ScoresPathsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoresPathsWhereInput
    orderBy?: ScoresPathsOrderByWithAggregationInput | ScoresPathsOrderByWithAggregationInput[]
    by: ScoresPathsScalarFieldEnum[] | ScoresPathsScalarFieldEnum
    having?: ScoresPathsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoresPathsCountAggregateInputType | true
    _min?: ScoresPathsMinAggregateInputType
    _max?: ScoresPathsMaxAggregateInputType
  }

  export type ScoresPathsGroupByOutputType = {
    id: string
    wtg: string | null
    site: string | null
    path: string | null
    _count: ScoresPathsCountAggregateOutputType | null
    _min: ScoresPathsMinAggregateOutputType | null
    _max: ScoresPathsMaxAggregateOutputType | null
  }

  type GetScoresPathsGroupByPayload<T extends ScoresPathsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoresPathsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoresPathsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoresPathsGroupByOutputType[P]>
            : GetScalarType<T[P], ScoresPathsGroupByOutputType[P]>
        }
      >
    >


  export type ScoresPathsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wtg?: boolean
    site?: boolean
    path?: boolean
  }, ExtArgs["result"]["scoresPaths"]>

  export type ScoresPathsSelectScalar = {
    id?: boolean
    wtg?: boolean
    site?: boolean
    path?: boolean
  }


  export type $ScoresPathsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScoresPaths"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wtg: string | null
      site: string | null
      path: string | null
    }, ExtArgs["result"]["scoresPaths"]>
    composites: {}
  }


  type ScoresPathsGetPayload<S extends boolean | null | undefined | ScoresPathsDefaultArgs> = $Result.GetResult<Prisma.$ScoresPathsPayload, S>

  type ScoresPathsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScoresPathsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScoresPathsCountAggregateInputType | true
    }

  export interface ScoresPathsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScoresPaths'], meta: { name: 'ScoresPaths' } }
    /**
     * Find zero or one ScoresPaths that matches the filter.
     * @param {ScoresPathsFindUniqueArgs} args - Arguments to find a ScoresPaths
     * @example
     * // Get one ScoresPaths
     * const scoresPaths = await prisma.scoresPaths.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScoresPathsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ScoresPathsFindUniqueArgs<ExtArgs>>
    ): Prisma__ScoresPathsClient<$Result.GetResult<Prisma.$ScoresPathsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ScoresPaths that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScoresPathsFindUniqueOrThrowArgs} args - Arguments to find a ScoresPaths
     * @example
     * // Get one ScoresPaths
     * const scoresPaths = await prisma.scoresPaths.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScoresPathsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoresPathsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ScoresPathsClient<$Result.GetResult<Prisma.$ScoresPathsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ScoresPaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoresPathsFindFirstArgs} args - Arguments to find a ScoresPaths
     * @example
     * // Get one ScoresPaths
     * const scoresPaths = await prisma.scoresPaths.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScoresPathsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoresPathsFindFirstArgs<ExtArgs>>
    ): Prisma__ScoresPathsClient<$Result.GetResult<Prisma.$ScoresPathsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ScoresPaths that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoresPathsFindFirstOrThrowArgs} args - Arguments to find a ScoresPaths
     * @example
     * // Get one ScoresPaths
     * const scoresPaths = await prisma.scoresPaths.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScoresPathsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoresPathsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ScoresPathsClient<$Result.GetResult<Prisma.$ScoresPathsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ScoresPaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoresPathsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScoresPaths
     * const scoresPaths = await prisma.scoresPaths.findMany()
     * 
     * // Get first 10 ScoresPaths
     * const scoresPaths = await prisma.scoresPaths.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoresPathsWithIdOnly = await prisma.scoresPaths.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScoresPathsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoresPathsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoresPathsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ScoresPaths.
     * @param {ScoresPathsCreateArgs} args - Arguments to create a ScoresPaths.
     * @example
     * // Create one ScoresPaths
     * const ScoresPaths = await prisma.scoresPaths.create({
     *   data: {
     *     // ... data to create a ScoresPaths
     *   }
     * })
     * 
    **/
    create<T extends ScoresPathsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ScoresPathsCreateArgs<ExtArgs>>
    ): Prisma__ScoresPathsClient<$Result.GetResult<Prisma.$ScoresPathsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ScoresPaths.
     *     @param {ScoresPathsCreateManyArgs} args - Arguments to create many ScoresPaths.
     *     @example
     *     // Create many ScoresPaths
     *     const scoresPaths = await prisma.scoresPaths.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScoresPathsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoresPathsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScoresPaths.
     * @param {ScoresPathsDeleteArgs} args - Arguments to delete one ScoresPaths.
     * @example
     * // Delete one ScoresPaths
     * const ScoresPaths = await prisma.scoresPaths.delete({
     *   where: {
     *     // ... filter to delete one ScoresPaths
     *   }
     * })
     * 
    **/
    delete<T extends ScoresPathsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ScoresPathsDeleteArgs<ExtArgs>>
    ): Prisma__ScoresPathsClient<$Result.GetResult<Prisma.$ScoresPathsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ScoresPaths.
     * @param {ScoresPathsUpdateArgs} args - Arguments to update one ScoresPaths.
     * @example
     * // Update one ScoresPaths
     * const scoresPaths = await prisma.scoresPaths.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScoresPathsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ScoresPathsUpdateArgs<ExtArgs>>
    ): Prisma__ScoresPathsClient<$Result.GetResult<Prisma.$ScoresPathsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ScoresPaths.
     * @param {ScoresPathsDeleteManyArgs} args - Arguments to filter ScoresPaths to delete.
     * @example
     * // Delete a few ScoresPaths
     * const { count } = await prisma.scoresPaths.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScoresPathsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoresPathsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoresPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoresPathsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScoresPaths
     * const scoresPaths = await prisma.scoresPaths.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScoresPathsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ScoresPathsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScoresPaths.
     * @param {ScoresPathsUpsertArgs} args - Arguments to update or create a ScoresPaths.
     * @example
     * // Update or create a ScoresPaths
     * const scoresPaths = await prisma.scoresPaths.upsert({
     *   create: {
     *     // ... data to create a ScoresPaths
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScoresPaths we want to update
     *   }
     * })
    **/
    upsert<T extends ScoresPathsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ScoresPathsUpsertArgs<ExtArgs>>
    ): Prisma__ScoresPathsClient<$Result.GetResult<Prisma.$ScoresPathsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ScoresPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoresPathsCountArgs} args - Arguments to filter ScoresPaths to count.
     * @example
     * // Count the number of ScoresPaths
     * const count = await prisma.scoresPaths.count({
     *   where: {
     *     // ... the filter for the ScoresPaths we want to count
     *   }
     * })
    **/
    count<T extends ScoresPathsCountArgs>(
      args?: Subset<T, ScoresPathsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoresPathsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScoresPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoresPathsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoresPathsAggregateArgs>(args: Subset<T, ScoresPathsAggregateArgs>): Prisma.PrismaPromise<GetScoresPathsAggregateType<T>>

    /**
     * Group by ScoresPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoresPathsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScoresPathsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoresPathsGroupByArgs['orderBy'] }
        : { orderBy?: ScoresPathsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoresPathsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoresPathsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScoresPaths model
   */
  readonly fields: ScoresPathsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScoresPaths.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoresPathsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ScoresPaths model
   */ 
  interface ScoresPathsFieldRefs {
    readonly id: FieldRef<"ScoresPaths", 'String'>
    readonly wtg: FieldRef<"ScoresPaths", 'String'>
    readonly site: FieldRef<"ScoresPaths", 'String'>
    readonly path: FieldRef<"ScoresPaths", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ScoresPaths findUnique
   */
  export type ScoresPathsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoresPaths
     */
    select?: ScoresPathsSelect<ExtArgs> | null
    /**
     * Filter, which ScoresPaths to fetch.
     */
    where: ScoresPathsWhereUniqueInput
  }


  /**
   * ScoresPaths findUniqueOrThrow
   */
  export type ScoresPathsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoresPaths
     */
    select?: ScoresPathsSelect<ExtArgs> | null
    /**
     * Filter, which ScoresPaths to fetch.
     */
    where: ScoresPathsWhereUniqueInput
  }


  /**
   * ScoresPaths findFirst
   */
  export type ScoresPathsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoresPaths
     */
    select?: ScoresPathsSelect<ExtArgs> | null
    /**
     * Filter, which ScoresPaths to fetch.
     */
    where?: ScoresPathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoresPaths to fetch.
     */
    orderBy?: ScoresPathsOrderByWithRelationInput | ScoresPathsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoresPaths.
     */
    cursor?: ScoresPathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoresPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoresPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoresPaths.
     */
    distinct?: ScoresPathsScalarFieldEnum | ScoresPathsScalarFieldEnum[]
  }


  /**
   * ScoresPaths findFirstOrThrow
   */
  export type ScoresPathsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoresPaths
     */
    select?: ScoresPathsSelect<ExtArgs> | null
    /**
     * Filter, which ScoresPaths to fetch.
     */
    where?: ScoresPathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoresPaths to fetch.
     */
    orderBy?: ScoresPathsOrderByWithRelationInput | ScoresPathsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoresPaths.
     */
    cursor?: ScoresPathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoresPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoresPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoresPaths.
     */
    distinct?: ScoresPathsScalarFieldEnum | ScoresPathsScalarFieldEnum[]
  }


  /**
   * ScoresPaths findMany
   */
  export type ScoresPathsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoresPaths
     */
    select?: ScoresPathsSelect<ExtArgs> | null
    /**
     * Filter, which ScoresPaths to fetch.
     */
    where?: ScoresPathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoresPaths to fetch.
     */
    orderBy?: ScoresPathsOrderByWithRelationInput | ScoresPathsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScoresPaths.
     */
    cursor?: ScoresPathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoresPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoresPaths.
     */
    skip?: number
    distinct?: ScoresPathsScalarFieldEnum | ScoresPathsScalarFieldEnum[]
  }


  /**
   * ScoresPaths create
   */
  export type ScoresPathsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoresPaths
     */
    select?: ScoresPathsSelect<ExtArgs> | null
    /**
     * The data needed to create a ScoresPaths.
     */
    data?: XOR<ScoresPathsCreateInput, ScoresPathsUncheckedCreateInput>
  }


  /**
   * ScoresPaths createMany
   */
  export type ScoresPathsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScoresPaths.
     */
    data: ScoresPathsCreateManyInput | ScoresPathsCreateManyInput[]
  }


  /**
   * ScoresPaths update
   */
  export type ScoresPathsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoresPaths
     */
    select?: ScoresPathsSelect<ExtArgs> | null
    /**
     * The data needed to update a ScoresPaths.
     */
    data: XOR<ScoresPathsUpdateInput, ScoresPathsUncheckedUpdateInput>
    /**
     * Choose, which ScoresPaths to update.
     */
    where: ScoresPathsWhereUniqueInput
  }


  /**
   * ScoresPaths updateMany
   */
  export type ScoresPathsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScoresPaths.
     */
    data: XOR<ScoresPathsUpdateManyMutationInput, ScoresPathsUncheckedUpdateManyInput>
    /**
     * Filter which ScoresPaths to update
     */
    where?: ScoresPathsWhereInput
  }


  /**
   * ScoresPaths upsert
   */
  export type ScoresPathsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoresPaths
     */
    select?: ScoresPathsSelect<ExtArgs> | null
    /**
     * The filter to search for the ScoresPaths to update in case it exists.
     */
    where: ScoresPathsWhereUniqueInput
    /**
     * In case the ScoresPaths found by the `where` argument doesn't exist, create a new ScoresPaths with this data.
     */
    create: XOR<ScoresPathsCreateInput, ScoresPathsUncheckedCreateInput>
    /**
     * In case the ScoresPaths was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoresPathsUpdateInput, ScoresPathsUncheckedUpdateInput>
  }


  /**
   * ScoresPaths delete
   */
  export type ScoresPathsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoresPaths
     */
    select?: ScoresPathsSelect<ExtArgs> | null
    /**
     * Filter which ScoresPaths to delete.
     */
    where: ScoresPathsWhereUniqueInput
  }


  /**
   * ScoresPaths deleteMany
   */
  export type ScoresPathsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoresPaths to delete
     */
    where?: ScoresPathsWhereInput
  }


  /**
   * ScoresPaths without action
   */
  export type ScoresPathsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoresPaths
     */
    select?: ScoresPathsSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WTGPartScalarFieldEnum: {
    id: 'id',
    name: 'name',
    wtg: 'wtg',
    site: 'site',
    status: 'status'
  };

  export type WTGPartScalarFieldEnum = (typeof WTGPartScalarFieldEnum)[keyof typeof WTGPartScalarFieldEnum]


  export const WTGDoorScalarFieldEnum: {
    id: 'id',
    wtg: 'wtg',
    site: 'site',
    door_path: 'door_path',
    status: 'status'
  };

  export type WTGDoorScalarFieldEnum = (typeof WTGDoorScalarFieldEnum)[keyof typeof WTGDoorScalarFieldEnum]


  export const ArchiveScalarFieldEnum: {
    id: 'id',
    part: 'part',
    wtg: 'wtg',
    site: 'site',
    path: 'path',
    status: 'status',
    size: 'size',
    uploaded: 'uploaded',
    upload_time: 'upload_time'
  };

  export type ArchiveScalarFieldEnum = (typeof ArchiveScalarFieldEnum)[keyof typeof ArchiveScalarFieldEnum]


  export const UploadItemScalarFieldEnum: {
    id: 'id',
    path: 'path',
    size: 'size',
    status: 'status',
    uploaded: 'uploaded',
    upload_time: 'upload_time'
  };

  export type UploadItemScalarFieldEnum = (typeof UploadItemScalarFieldEnum)[keyof typeof UploadItemScalarFieldEnum]


  export const ScoresPathsScalarFieldEnum: {
    id: 'id',
    wtg: 'wtg',
    site: 'site',
    path: 'path'
  };

  export type ScoresPathsScalarFieldEnum = (typeof ScoresPathsScalarFieldEnum)[keyof typeof ScoresPathsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type WTGPartWhereInput = {
    AND?: WTGPartWhereInput | WTGPartWhereInput[]
    OR?: WTGPartWhereInput[]
    NOT?: WTGPartWhereInput | WTGPartWhereInput[]
    id?: StringFilter<"WTGPart"> | string
    name?: StringNullableFilter<"WTGPart"> | string | null
    wtg?: StringNullableFilter<"WTGPart"> | string | null
    site?: StringNullableFilter<"WTGPart"> | string | null
    status?: StringNullableFilter<"WTGPart"> | string | null
  }

  export type WTGPartOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    wtg?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
  }

  export type WTGPartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WTGPartWhereInput | WTGPartWhereInput[]
    OR?: WTGPartWhereInput[]
    NOT?: WTGPartWhereInput | WTGPartWhereInput[]
    name?: StringNullableFilter<"WTGPart"> | string | null
    wtg?: StringNullableFilter<"WTGPart"> | string | null
    site?: StringNullableFilter<"WTGPart"> | string | null
    status?: StringNullableFilter<"WTGPart"> | string | null
  }, "id">

  export type WTGPartOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    wtg?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: WTGPartCountOrderByAggregateInput
    _max?: WTGPartMaxOrderByAggregateInput
    _min?: WTGPartMinOrderByAggregateInput
  }

  export type WTGPartScalarWhereWithAggregatesInput = {
    AND?: WTGPartScalarWhereWithAggregatesInput | WTGPartScalarWhereWithAggregatesInput[]
    OR?: WTGPartScalarWhereWithAggregatesInput[]
    NOT?: WTGPartScalarWhereWithAggregatesInput | WTGPartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WTGPart"> | string
    name?: StringNullableWithAggregatesFilter<"WTGPart"> | string | null
    wtg?: StringNullableWithAggregatesFilter<"WTGPart"> | string | null
    site?: StringNullableWithAggregatesFilter<"WTGPart"> | string | null
    status?: StringNullableWithAggregatesFilter<"WTGPart"> | string | null
  }

  export type WTGDoorWhereInput = {
    AND?: WTGDoorWhereInput | WTGDoorWhereInput[]
    OR?: WTGDoorWhereInput[]
    NOT?: WTGDoorWhereInput | WTGDoorWhereInput[]
    id?: StringFilter<"WTGDoor"> | string
    wtg?: StringNullableFilter<"WTGDoor"> | string | null
    site?: StringNullableFilter<"WTGDoor"> | string | null
    door_path?: StringNullableFilter<"WTGDoor"> | string | null
    status?: StringNullableFilter<"WTGDoor"> | string | null
  }

  export type WTGDoorOrderByWithRelationInput = {
    id?: SortOrder
    wtg?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    door_path?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
  }

  export type WTGDoorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WTGDoorWhereInput | WTGDoorWhereInput[]
    OR?: WTGDoorWhereInput[]
    NOT?: WTGDoorWhereInput | WTGDoorWhereInput[]
    wtg?: StringNullableFilter<"WTGDoor"> | string | null
    site?: StringNullableFilter<"WTGDoor"> | string | null
    door_path?: StringNullableFilter<"WTGDoor"> | string | null
    status?: StringNullableFilter<"WTGDoor"> | string | null
  }, "id">

  export type WTGDoorOrderByWithAggregationInput = {
    id?: SortOrder
    wtg?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    door_path?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: WTGDoorCountOrderByAggregateInput
    _max?: WTGDoorMaxOrderByAggregateInput
    _min?: WTGDoorMinOrderByAggregateInput
  }

  export type WTGDoorScalarWhereWithAggregatesInput = {
    AND?: WTGDoorScalarWhereWithAggregatesInput | WTGDoorScalarWhereWithAggregatesInput[]
    OR?: WTGDoorScalarWhereWithAggregatesInput[]
    NOT?: WTGDoorScalarWhereWithAggregatesInput | WTGDoorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WTGDoor"> | string
    wtg?: StringNullableWithAggregatesFilter<"WTGDoor"> | string | null
    site?: StringNullableWithAggregatesFilter<"WTGDoor"> | string | null
    door_path?: StringNullableWithAggregatesFilter<"WTGDoor"> | string | null
    status?: StringNullableWithAggregatesFilter<"WTGDoor"> | string | null
  }

  export type ArchiveWhereInput = {
    AND?: ArchiveWhereInput | ArchiveWhereInput[]
    OR?: ArchiveWhereInput[]
    NOT?: ArchiveWhereInput | ArchiveWhereInput[]
    id?: StringFilter<"Archive"> | string
    part?: StringNullableFilter<"Archive"> | string | null
    wtg?: StringNullableFilter<"Archive"> | string | null
    site?: StringNullableFilter<"Archive"> | string | null
    path?: StringNullableFilter<"Archive"> | string | null
    status?: StringNullableFilter<"Archive"> | string | null
    size?: StringNullableFilter<"Archive"> | string | null
    uploaded?: StringNullableFilter<"Archive"> | string | null
    upload_time?: StringNullableFilter<"Archive"> | string | null
  }

  export type ArchiveOrderByWithRelationInput = {
    id?: SortOrder
    part?: SortOrderInput | SortOrder
    wtg?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    uploaded?: SortOrderInput | SortOrder
    upload_time?: SortOrderInput | SortOrder
  }

  export type ArchiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArchiveWhereInput | ArchiveWhereInput[]
    OR?: ArchiveWhereInput[]
    NOT?: ArchiveWhereInput | ArchiveWhereInput[]
    part?: StringNullableFilter<"Archive"> | string | null
    wtg?: StringNullableFilter<"Archive"> | string | null
    site?: StringNullableFilter<"Archive"> | string | null
    path?: StringNullableFilter<"Archive"> | string | null
    status?: StringNullableFilter<"Archive"> | string | null
    size?: StringNullableFilter<"Archive"> | string | null
    uploaded?: StringNullableFilter<"Archive"> | string | null
    upload_time?: StringNullableFilter<"Archive"> | string | null
  }, "id">

  export type ArchiveOrderByWithAggregationInput = {
    id?: SortOrder
    part?: SortOrderInput | SortOrder
    wtg?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    uploaded?: SortOrderInput | SortOrder
    upload_time?: SortOrderInput | SortOrder
    _count?: ArchiveCountOrderByAggregateInput
    _max?: ArchiveMaxOrderByAggregateInput
    _min?: ArchiveMinOrderByAggregateInput
  }

  export type ArchiveScalarWhereWithAggregatesInput = {
    AND?: ArchiveScalarWhereWithAggregatesInput | ArchiveScalarWhereWithAggregatesInput[]
    OR?: ArchiveScalarWhereWithAggregatesInput[]
    NOT?: ArchiveScalarWhereWithAggregatesInput | ArchiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Archive"> | string
    part?: StringNullableWithAggregatesFilter<"Archive"> | string | null
    wtg?: StringNullableWithAggregatesFilter<"Archive"> | string | null
    site?: StringNullableWithAggregatesFilter<"Archive"> | string | null
    path?: StringNullableWithAggregatesFilter<"Archive"> | string | null
    status?: StringNullableWithAggregatesFilter<"Archive"> | string | null
    size?: StringNullableWithAggregatesFilter<"Archive"> | string | null
    uploaded?: StringNullableWithAggregatesFilter<"Archive"> | string | null
    upload_time?: StringNullableWithAggregatesFilter<"Archive"> | string | null
  }

  export type UploadItemWhereInput = {
    AND?: UploadItemWhereInput | UploadItemWhereInput[]
    OR?: UploadItemWhereInput[]
    NOT?: UploadItemWhereInput | UploadItemWhereInput[]
    id?: StringFilter<"UploadItem"> | string
    path?: StringNullableFilter<"UploadItem"> | string | null
    size?: StringNullableFilter<"UploadItem"> | string | null
    status?: StringNullableFilter<"UploadItem"> | string | null
    uploaded?: StringNullableFilter<"UploadItem"> | string | null
    upload_time?: StringNullableFilter<"UploadItem"> | string | null
  }

  export type UploadItemOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    uploaded?: SortOrderInput | SortOrder
    upload_time?: SortOrderInput | SortOrder
  }

  export type UploadItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UploadItemWhereInput | UploadItemWhereInput[]
    OR?: UploadItemWhereInput[]
    NOT?: UploadItemWhereInput | UploadItemWhereInput[]
    path?: StringNullableFilter<"UploadItem"> | string | null
    size?: StringNullableFilter<"UploadItem"> | string | null
    status?: StringNullableFilter<"UploadItem"> | string | null
    uploaded?: StringNullableFilter<"UploadItem"> | string | null
    upload_time?: StringNullableFilter<"UploadItem"> | string | null
  }, "id">

  export type UploadItemOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    uploaded?: SortOrderInput | SortOrder
    upload_time?: SortOrderInput | SortOrder
    _count?: UploadItemCountOrderByAggregateInput
    _max?: UploadItemMaxOrderByAggregateInput
    _min?: UploadItemMinOrderByAggregateInput
  }

  export type UploadItemScalarWhereWithAggregatesInput = {
    AND?: UploadItemScalarWhereWithAggregatesInput | UploadItemScalarWhereWithAggregatesInput[]
    OR?: UploadItemScalarWhereWithAggregatesInput[]
    NOT?: UploadItemScalarWhereWithAggregatesInput | UploadItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UploadItem"> | string
    path?: StringNullableWithAggregatesFilter<"UploadItem"> | string | null
    size?: StringNullableWithAggregatesFilter<"UploadItem"> | string | null
    status?: StringNullableWithAggregatesFilter<"UploadItem"> | string | null
    uploaded?: StringNullableWithAggregatesFilter<"UploadItem"> | string | null
    upload_time?: StringNullableWithAggregatesFilter<"UploadItem"> | string | null
  }

  export type ScoresPathsWhereInput = {
    AND?: ScoresPathsWhereInput | ScoresPathsWhereInput[]
    OR?: ScoresPathsWhereInput[]
    NOT?: ScoresPathsWhereInput | ScoresPathsWhereInput[]
    id?: StringFilter<"ScoresPaths"> | string
    wtg?: StringNullableFilter<"ScoresPaths"> | string | null
    site?: StringNullableFilter<"ScoresPaths"> | string | null
    path?: StringNullableFilter<"ScoresPaths"> | string | null
  }

  export type ScoresPathsOrderByWithRelationInput = {
    id?: SortOrder
    wtg?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
  }

  export type ScoresPathsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScoresPathsWhereInput | ScoresPathsWhereInput[]
    OR?: ScoresPathsWhereInput[]
    NOT?: ScoresPathsWhereInput | ScoresPathsWhereInput[]
    wtg?: StringNullableFilter<"ScoresPaths"> | string | null
    site?: StringNullableFilter<"ScoresPaths"> | string | null
    path?: StringNullableFilter<"ScoresPaths"> | string | null
  }, "id">

  export type ScoresPathsOrderByWithAggregationInput = {
    id?: SortOrder
    wtg?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    _count?: ScoresPathsCountOrderByAggregateInput
    _max?: ScoresPathsMaxOrderByAggregateInput
    _min?: ScoresPathsMinOrderByAggregateInput
  }

  export type ScoresPathsScalarWhereWithAggregatesInput = {
    AND?: ScoresPathsScalarWhereWithAggregatesInput | ScoresPathsScalarWhereWithAggregatesInput[]
    OR?: ScoresPathsScalarWhereWithAggregatesInput[]
    NOT?: ScoresPathsScalarWhereWithAggregatesInput | ScoresPathsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScoresPaths"> | string
    wtg?: StringNullableWithAggregatesFilter<"ScoresPaths"> | string | null
    site?: StringNullableWithAggregatesFilter<"ScoresPaths"> | string | null
    path?: StringNullableWithAggregatesFilter<"ScoresPaths"> | string | null
  }

  export type WTGPartCreateInput = {
    id?: string
    name?: string | null
    wtg?: string | null
    site?: string | null
    status?: string | null
  }

  export type WTGPartUncheckedCreateInput = {
    id?: string
    name?: string | null
    wtg?: string | null
    site?: string | null
    status?: string | null
  }

  export type WTGPartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WTGPartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WTGPartCreateManyInput = {
    id?: string
    name?: string | null
    wtg?: string | null
    site?: string | null
    status?: string | null
  }

  export type WTGPartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WTGPartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WTGDoorCreateInput = {
    id?: string
    wtg?: string | null
    site?: string | null
    door_path?: string | null
    status?: string | null
  }

  export type WTGDoorUncheckedCreateInput = {
    id?: string
    wtg?: string | null
    site?: string | null
    door_path?: string | null
    status?: string | null
  }

  export type WTGDoorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    door_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WTGDoorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    door_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WTGDoorCreateManyInput = {
    id?: string
    wtg?: string | null
    site?: string | null
    door_path?: string | null
    status?: string | null
  }

  export type WTGDoorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    door_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WTGDoorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    door_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArchiveCreateInput = {
    id?: string
    part?: string | null
    wtg?: string | null
    site?: string | null
    path?: string | null
    status?: string | null
    size?: string | null
    uploaded?: string | null
    upload_time?: string | null
  }

  export type ArchiveUncheckedCreateInput = {
    id?: string
    part?: string | null
    wtg?: string | null
    site?: string | null
    path?: string | null
    status?: string | null
    size?: string | null
    uploaded?: string | null
    upload_time?: string | null
  }

  export type ArchiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded?: NullableStringFieldUpdateOperationsInput | string | null
    upload_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArchiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded?: NullableStringFieldUpdateOperationsInput | string | null
    upload_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArchiveCreateManyInput = {
    id?: string
    part?: string | null
    wtg?: string | null
    site?: string | null
    path?: string | null
    status?: string | null
    size?: string | null
    uploaded?: string | null
    upload_time?: string | null
  }

  export type ArchiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded?: NullableStringFieldUpdateOperationsInput | string | null
    upload_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArchiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    part?: NullableStringFieldUpdateOperationsInput | string | null
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded?: NullableStringFieldUpdateOperationsInput | string | null
    upload_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadItemCreateInput = {
    id?: string
    path?: string | null
    size?: string | null
    status?: string | null
    uploaded?: string | null
    upload_time?: string | null
  }

  export type UploadItemUncheckedCreateInput = {
    id?: string
    path?: string | null
    size?: string | null
    status?: string | null
    uploaded?: string | null
    upload_time?: string | null
  }

  export type UploadItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded?: NullableStringFieldUpdateOperationsInput | string | null
    upload_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded?: NullableStringFieldUpdateOperationsInput | string | null
    upload_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadItemCreateManyInput = {
    id?: string
    path?: string | null
    size?: string | null
    status?: string | null
    uploaded?: string | null
    upload_time?: string | null
  }

  export type UploadItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded?: NullableStringFieldUpdateOperationsInput | string | null
    upload_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded?: NullableStringFieldUpdateOperationsInput | string | null
    upload_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScoresPathsCreateInput = {
    id?: string
    wtg?: string | null
    site?: string | null
    path?: string | null
  }

  export type ScoresPathsUncheckedCreateInput = {
    id?: string
    wtg?: string | null
    site?: string | null
    path?: string | null
  }

  export type ScoresPathsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScoresPathsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScoresPathsCreateManyInput = {
    id?: string
    wtg?: string | null
    site?: string | null
    path?: string | null
  }

  export type ScoresPathsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScoresPathsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wtg?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WTGPartCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    status?: SortOrder
  }

  export type WTGPartMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    status?: SortOrder
  }

  export type WTGPartMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type WTGDoorCountOrderByAggregateInput = {
    id?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    door_path?: SortOrder
    status?: SortOrder
  }

  export type WTGDoorMaxOrderByAggregateInput = {
    id?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    door_path?: SortOrder
    status?: SortOrder
  }

  export type WTGDoorMinOrderByAggregateInput = {
    id?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    door_path?: SortOrder
    status?: SortOrder
  }

  export type ArchiveCountOrderByAggregateInput = {
    id?: SortOrder
    part?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    path?: SortOrder
    status?: SortOrder
    size?: SortOrder
    uploaded?: SortOrder
    upload_time?: SortOrder
  }

  export type ArchiveMaxOrderByAggregateInput = {
    id?: SortOrder
    part?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    path?: SortOrder
    status?: SortOrder
    size?: SortOrder
    uploaded?: SortOrder
    upload_time?: SortOrder
  }

  export type ArchiveMinOrderByAggregateInput = {
    id?: SortOrder
    part?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    path?: SortOrder
    status?: SortOrder
    size?: SortOrder
    uploaded?: SortOrder
    upload_time?: SortOrder
  }

  export type UploadItemCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    size?: SortOrder
    status?: SortOrder
    uploaded?: SortOrder
    upload_time?: SortOrder
  }

  export type UploadItemMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    size?: SortOrder
    status?: SortOrder
    uploaded?: SortOrder
    upload_time?: SortOrder
  }

  export type UploadItemMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    size?: SortOrder
    status?: SortOrder
    uploaded?: SortOrder
    upload_time?: SortOrder
  }

  export type ScoresPathsCountOrderByAggregateInput = {
    id?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    path?: SortOrder
  }

  export type ScoresPathsMaxOrderByAggregateInput = {
    id?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    path?: SortOrder
  }

  export type ScoresPathsMinOrderByAggregateInput = {
    id?: SortOrder
    wtg?: SortOrder
    site?: SortOrder
    path?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use WTGPartDefaultArgs instead
     */
    export type WTGPartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WTGPartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WTGDoorDefaultArgs instead
     */
    export type WTGDoorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WTGDoorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArchiveDefaultArgs instead
     */
    export type ArchiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArchiveDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UploadItemDefaultArgs instead
     */
    export type UploadItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UploadItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScoresPathsDefaultArgs instead
     */
    export type ScoresPathsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScoresPathsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}