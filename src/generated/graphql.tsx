import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  DateTimeTz: any
  Upload: any
}

export type Asiento = {
  __typename?: 'Asiento'
  asiento?: Maybe<Scalars['String']>
  asientoId?: Maybe<Scalars['ID']>
  code?: Maybe<Scalars['String']>
  codigo?: Maybe<Scalars['String']>
  eventoId?: Maybe<Scalars['Int']>
  feriaId?: Maybe<Scalars['Int']>
  reservado?: Maybe<Scalars['String']>
  tendido?: Maybe<Scalars['String']>
}

export type AsignacionEntrada = {
  __typename?: 'AsignacionEntrada'
  Evento?: Maybe<Evento>
  apellidos?: Maybe<Scalars['String']>
  asientoId?: Maybe<Scalars['ID']>
  codigo?: Maybe<Scalars['String']>
  estado?: Maybe<Scalars['String']>
  eventoId?: Maybe<Scalars['Int']>
  fecha?: Maybe<Scalars['Date']>
  hora?: Maybe<Scalars['String']>
  nombres?: Maybe<Scalars['String']>
  numDocumento?: Maybe<Scalars['String']>
  reservado?: Maybe<Scalars['String']>
  tendido?: Maybe<Scalars['String']>
  tipoDocumento?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
}

export type AsignacionEntradaInput = {
  apellidos?: InputMaybe<Scalars['String']>
  asientoId?: InputMaybe<Scalars['ID']>
  nombres?: InputMaybe<Scalars['String']>
  numDocumento?: InputMaybe<Scalars['String']>
  tipoDocumento?: InputMaybe<Scalars['String']>
}

export type AsignacionEntradaVentaInput = {
  apellidos?: InputMaybe<Scalars['String']>
  asientoId?: InputMaybe<Scalars['ID']>
  code?: InputMaybe<Scalars['String']>
  nombres?: InputMaybe<Scalars['String']>
  numDocumento?: InputMaybe<Scalars['String']>
  tipoDocumento?: InputMaybe<Scalars['String']>
}

export type Asistente = {
  __typename?: 'Asistente'
  apellidos?: Maybe<Scalars['String']>
  asiento?: Maybe<Scalars['String']>
  asientoId?: Maybe<Scalars['ID']>
  codigo?: Maybe<Scalars['String']>
  estado?: Maybe<Scalars['String']>
  nombres?: Maybe<Scalars['String']>
  numDocumento?: Maybe<Scalars['String']>
  tipoDocumento?: Maybe<Scalars['String']>
}

export type Bloque = {
  __typename?: 'Bloque'
  asiento?: Maybe<Scalars['String']>
  bloqueId?: Maybe<Scalars['ID']>
  codigo?: Maybe<Scalars['String']>
  reservado?: Maybe<Scalars['String']>
  tendido?: Maybe<Scalars['String']>
}

export type BloqueoAsientoInput = {
  asiento?: InputMaybe<Scalars['String']>
  codigo?: InputMaybe<Scalars['String']>
  eventoId?: InputMaybe<Scalars['Int']>
  feriaId?: InputMaybe<Scalars['Int']>
  reservado?: InputMaybe<Scalars['String']>
  tendido?: InputMaybe<Scalars['String']>
}

export type Butaca = {
  __typename?: 'Butaca'
  butacaId?: Maybe<Scalars['ID']>
  cantidad?: Maybe<Scalars['Int']>
  codigo?: Maybe<Scalars['String']>
  precio?: Maybe<Scalars['Float']>
  tendido?: Maybe<Scalars['String']>
}

export type ButacaEvento = {
  __typename?: 'ButacaEvento'
  butacaEventoId?: Maybe<Scalars['Int']>
  cantidad?: Maybe<Scalars['Int']>
  codigo?: Maybe<Scalars['String']>
  eventoId?: Maybe<Scalars['Int']>
  precio?: Maybe<Scalars['Float']>
  tendido?: Maybe<Scalars['String']>
}

export type ButacaEventoInput = {
  butacaEventoId?: InputMaybe<Scalars['Int']>
  eventoId?: InputMaybe<Scalars['Int']>
  precio?: InputMaybe<Scalars['Float']>
}

export type ButacaInput = {
  butacaId?: InputMaybe<Scalars['ID']>
  precio?: InputMaybe<Scalars['Float']>
}

export type DetallePedido = {
  __typename?: 'DetallePedido'
  Evento?: Maybe<Evento>
  asiento?: Maybe<Scalars['String']>
  codigo?: Maybe<Scalars['String']>
  detallePedidoId?: Maybe<Scalars['ID']>
  eventoId?: Maybe<Scalars['Int']>
  feriaId?: Maybe<Scalars['Int']>
  pedidoId?: Maybe<Scalars['Int']>
  precio?: Maybe<Scalars['Float']>
  tendido?: Maybe<Scalars['String']>
}

export type DetallePedidoInput = {
  asiento?: InputMaybe<Scalars['String']>
  codigo?: InputMaybe<Scalars['String']>
  eventoId?: InputMaybe<Scalars['Int']>
  feriaId?: InputMaybe<Scalars['Int']>
  precio?: InputMaybe<Scalars['Float']>
  reservado?: InputMaybe<Scalars['String']>
  tendido?: InputMaybe<Scalars['String']>
}

export type DetalleVenta = {
  __typename?: 'DetalleVenta'
  Evento?: Maybe<Evento>
  asiento?: Maybe<Scalars['String']>
  codigo?: Maybe<Scalars['String']>
  detalleVentaId?: Maybe<Scalars['ID']>
  eventoId?: Maybe<Scalars['Int']>
  feriaId?: Maybe<Scalars['Int']>
  precio?: Maybe<Scalars['Float']>
  tendido?: Maybe<Scalars['String']>
  ventaId?: Maybe<Scalars['Int']>
}

export type DetalleVentaInput = {
  asiento?: InputMaybe<Scalars['String']>
  codigo?: InputMaybe<Scalars['String']>
  eventoId?: InputMaybe<Scalars['Int']>
  feriaId?: InputMaybe<Scalars['Int']>
  precio?: InputMaybe<Scalars['Float']>
  reservado?: InputMaybe<Scalars['String']>
  tendido?: InputMaybe<Scalars['String']>
}

export type Evento = {
  __typename?: 'Evento'
  descripcionCorta?: Maybe<Scalars['String']>
  descripcionLarga?: Maybe<Scalars['String']>
  direccion?: Maybe<Scalars['String']>
  estado?: Maybe<Scalars['String']>
  eventoId?: Maybe<Scalars['ID']>
  fecha?: Maybe<Scalars['Date']>
  fechaFinal?: Maybe<Scalars['Date']>
  fechaInicial?: Maybe<Scalars['Date']>
  feriaId?: Maybe<Scalars['Int']>
  hora?: Maybe<Scalars['String']>
  horaFinal?: Maybe<Scalars['String']>
  horaInicial?: Maybe<Scalars['String']>
  imagenPrincipal?: Maybe<Imagen>
  slug?: Maybe<Scalars['String']>
  terminosCondiciones?: Maybe<Scalars['String']>
  titulo?: Maybe<Scalars['String']>
  ubicacion?: Maybe<Scalars['String']>
}

export type EventoInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>
  descripcionLarga?: InputMaybe<Scalars['String']>
  direccion?: InputMaybe<Scalars['String']>
  eventoId?: InputMaybe<Scalars['ID']>
  fecha?: InputMaybe<Scalars['Date']>
  fechaFinal?: InputMaybe<Scalars['Date']>
  fechaInicial?: InputMaybe<Scalars['Date']>
  hora?: InputMaybe<Scalars['String']>
  horaFinal?: InputMaybe<Scalars['String']>
  horaInicial?: InputMaybe<Scalars['String']>
  imagenPrincipal?: InputMaybe<Scalars['Int']>
  terminosCondiciones?: InputMaybe<Scalars['String']>
  titulo?: InputMaybe<Scalars['String']>
  ubicacion?: InputMaybe<Scalars['String']>
}

export type Feria = {
  __typename?: 'Feria'
  descripcionCorta?: Maybe<Scalars['String']>
  descripcionLarga?: Maybe<Scalars['String']>
  descuento?: Maybe<Scalars['Int']>
  fecha?: Maybe<Scalars['Date']>
  fechaFinal?: Maybe<Scalars['Date']>
  fechaInicial?: Maybe<Scalars['Date']>
  feriaId?: Maybe<Scalars['ID']>
  hora?: Maybe<Scalars['String']>
  horaFinal?: Maybe<Scalars['String']>
  horaInicial?: Maybe<Scalars['String']>
  imagenPrincipal?: Maybe<Imagen>
  imagenSecundaria?: Maybe<Imagen>
  terminosCondiciones?: Maybe<Scalars['String']>
  titulo?: Maybe<Scalars['String']>
}

export type FeriaInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>
  descripcionLarga?: InputMaybe<Scalars['String']>
  descuento?: InputMaybe<Scalars['Int']>
  fecha?: InputMaybe<Scalars['Date']>
  fechaFinal?: InputMaybe<Scalars['Date']>
  fechaInicial?: InputMaybe<Scalars['Date']>
  feriaId?: InputMaybe<Scalars['ID']>
  hora?: InputMaybe<Scalars['String']>
  horaFinal?: InputMaybe<Scalars['String']>
  horaInicial?: InputMaybe<Scalars['String']>
  imagenPrincipal?: InputMaybe<Scalars['Int']>
  imagenSecundaria?: InputMaybe<Scalars['Int']>
  terminosCondiciones?: InputMaybe<Scalars['String']>
  titulo?: InputMaybe<Scalars['String']>
}

export type GetAllAsientos = {
  __typename?: 'GetAllAsientos'
  data?: Maybe<Array<Maybe<Asiento>>>
  numeroTotal?: Maybe<Scalars['Int']>
}

export type GetAllButacaEvento = {
  __typename?: 'GetAllButacaEvento'
  data?: Maybe<Array<Maybe<ButacaEvento>>>
  numeroTotal?: Maybe<Scalars['Int']>
}

export type GetAllButacas = {
  __typename?: 'GetAllButacas'
  data?: Maybe<Array<Maybe<Butaca>>>
  numeroTotal?: Maybe<Scalars['Int']>
}

export type GetAllEventos = {
  __typename?: 'GetAllEventos'
  data?: Maybe<Array<Evento>>
  numeroTotal?: Maybe<Scalars['Int']>
}

export type GetAllImagenes = {
  __typename?: 'GetAllImagenes'
  data?: Maybe<Array<Imagen>>
  numeroTotal?: Maybe<Scalars['Int']>
}

export type GetAllPedidos = {
  __typename?: 'GetAllPedidos'
  data?: Maybe<Array<Pedido>>
  numeroTotal?: Maybe<Scalars['Int']>
}

export type GetAllSuscriptores = {
  __typename?: 'GetAllSuscriptores'
  data?: Maybe<Array<Maybe<Suscriptor>>>
  numeroTotal?: Maybe<Scalars['Int']>
}

export type GetAllVendedoras = {
  __typename?: 'GetAllVendedoras'
  data?: Maybe<Array<Maybe<Vendedora>>>
  numeroTotal?: Maybe<Scalars['Int']>
}

export type GetAllVentas = {
  __typename?: 'GetAllVentas'
  data?: Maybe<Array<Venta>>
  numeroTotal?: Maybe<Scalars['Int']>
}

export type Imagen = {
  __typename?: 'Imagen'
  id?: Maybe<Scalars['ID']>
  titulo?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  AsignarPrecioButacaEvento: ButacaEvento
  ConsultEmail?: Maybe<Scalars['String']>
  CreateBloqueoAsiento?: Maybe<Scalars['String']>
  CreateBloqueoAsientoAbono?: Maybe<Scalars['String']>
  CreateEvento?: Maybe<Evento>
  CreateImagen: Scalars['String']
  CreatePedido: Pedido
  CreatePedidoAbonado: Pedido
  CreateSuscriptor?: Maybe<Suscriptor>
  CreateUsuario: User
  CreateVendedora?: Maybe<Vendedora>
  CreateVenta: Venta
  CreateVentaAbonado: Venta
  DeleteAsientoBloqueado?: Maybe<Scalars['String']>
  DeleteEvento?: Maybe<Scalars['String']>
  DeleteImagen: Scalars['String']
  DeleteVenta?: Maybe<Scalars['String']>
  Login?: Maybe<User>
  RecoverPassword?: Maybe<Scalars['String']>
  RestartAsientos?: Maybe<Scalars['String']>
  UpdateAsignacionEntrada?: Maybe<AsignacionEntrada>
  UpdateAsignacionEntradaVenta?: Maybe<AsignacionEntrada>
  UpdateAsistencia?: Maybe<Asistente>
  UpdateEstadoEvento?: Maybe<Evento>
  UpdateEstadoVendedora?: Maybe<Vendedora>
  UpdateEvento?: Maybe<Evento>
  UpdateFeria?: Maybe<Feria>
  UpdateImagen: Imagen
  UpdatePassword: User
  UpdatePrecio: Butaca
  UpdatePrecioReferencial?: Maybe<Referencial>
  UpdateUsuario: User
  UpdateVendedora?: Maybe<Vendedora>
  ValidacionEntrada?: Maybe<Asistente>
}

export type MutationAsignarPrecioButacaEventoArgs = {
  input?: InputMaybe<ButacaEventoInput>
}

export type MutationConsultEmailArgs = {
  email: Scalars['String']
}

export type MutationCreateBloqueoAsientoArgs = {
  input?: InputMaybe<Array<BloqueoAsientoInput>>
}

export type MutationCreateBloqueoAsientoAbonoArgs = {
  input?: InputMaybe<Array<BloqueoAsientoInput>>
}

export type MutationCreateEventoArgs = {
  input: EventoInput
}

export type MutationCreateImagenArgs = {
  imagen: Scalars['Upload']
}

export type MutationCreatePedidoArgs = {
  input1: PedidoInput
  input2?: InputMaybe<Array<DetallePedidoInput>>
  input3?: InputMaybe<UserInput>
}

export type MutationCreatePedidoAbonadoArgs = {
  input1: PedidoInput
  input2?: InputMaybe<Array<DetallePedidoInput>>
  input3?: InputMaybe<UserInput>
}

export type MutationCreateSuscriptorArgs = {
  input: SuscriptorInput
}

export type MutationCreateUsuarioArgs = {
  input: UserInput
}

export type MutationCreateVendedoraArgs = {
  input: VendedoraInput
}

export type MutationCreateVentaArgs = {
  input1: VentaInput
  input2?: InputMaybe<Array<DetalleVentaInput>>
}

export type MutationCreateVentaAbonadoArgs = {
  input1: VentaInput
  input2?: InputMaybe<Array<DetalleVentaInput>>
}

export type MutationDeleteAsientoBloqueadoArgs = {
  asientoId: Scalars['Int']
}

export type MutationDeleteEventoArgs = {
  eventoId: Scalars['Int']
}

export type MutationDeleteImagenArgs = {
  id: Scalars['Int']
}

export type MutationDeleteVentaArgs = {
  ventaId: Scalars['Int']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRecoverPasswordArgs = {
  email?: InputMaybe<Scalars['String']>
}

export type MutationRestartAsientosArgs = {
  feriaId: Scalars['Int']
}

export type MutationUpdateAsignacionEntradaArgs = {
  input: AsignacionEntradaInput
}

export type MutationUpdateAsignacionEntradaVentaArgs = {
  input: AsignacionEntradaVentaInput
}

export type MutationUpdateAsistenciaArgs = {
  input: UpdateAsistenciaInput
}

export type MutationUpdateEstadoEventoArgs = {
  input: UpdateEstadoEventoInput
}

export type MutationUpdateEstadoVendedoraArgs = {
  input: UpdateEstadoVendedoraInput
}

export type MutationUpdateEventoArgs = {
  input: EventoInput
}

export type MutationUpdateFeriaArgs = {
  input: FeriaInput
}

export type MutationUpdateImagenArgs = {
  id?: InputMaybe<Scalars['Int']>
  titulo?: InputMaybe<Scalars['String']>
}

export type MutationUpdatePasswordArgs = {
  input?: InputMaybe<UpdatePasswordInput>
}

export type MutationUpdatePrecioArgs = {
  input?: InputMaybe<ButacaInput>
}

export type MutationUpdatePrecioReferencialArgs = {
  input: ReferencialInput
}

export type MutationUpdateUsuarioArgs = {
  input?: InputMaybe<UserInput>
}

export type MutationUpdateVendedoraArgs = {
  input: VendedoraInput
}

export type MutationValidacionEntradaArgs = {
  constante?: InputMaybe<Scalars['String']>
  eventoId?: InputMaybe<Scalars['Int']>
  numDocumento?: InputMaybe<Scalars['String']>
  tipoDocumento?: InputMaybe<Scalars['String']>
}

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String']
  /** The direction that is used for ordering. */
  order: SortOrder
}

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>
}

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo'
  /** Total count of available items in the page. */
  count: Scalars['Int']
  /** Current pagination page. */
  currentPage: Scalars['Int']
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean']
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>
  /** Last page number of the collection. */
  lastPage: Scalars['Int']
  /** Number of items per page in the collection. */
  perPage: Scalars['Int']
  /** Total items available in the collection. */
  total: Scalars['Int']
}

export type Pedido = {
  __typename?: 'Pedido'
  DetallePedido?: Maybe<Array<DetallePedido>>
  Usuario?: Maybe<User>
  email?: Maybe<Scalars['String']>
  fechaPedido?: Maybe<Scalars['Date']>
  numeroComprobante?: Maybe<Scalars['String']>
  pedidoId?: Maybe<Scalars['ID']>
  precioTotal?: Maybe<Scalars['Float']>
  razonSocial?: Maybe<Scalars['String']>
  tipoComprobante?: Maybe<Scalars['String']>
  transaccionId?: Maybe<Scalars['Float']>
  usuarioId?: Maybe<Scalars['Int']>
}

export type PedidoInput = {
  fechaPedido?: InputMaybe<Scalars['Date']>
  numeroComprobante?: InputMaybe<Scalars['String']>
  pedidoId?: InputMaybe<Scalars['ID']>
  precioTotal?: InputMaybe<Scalars['Float']>
  razonSocial?: InputMaybe<Scalars['String']>
  tipoComprobante?: InputMaybe<Scalars['String']>
  transaccionId?: InputMaybe<Scalars['Float']>
}

export type Query = {
  __typename?: 'Query'
  GetAllAsientos?: Maybe<Array<Maybe<Asiento>>>
  GetAllAsientosAbonados?: Maybe<Array<Maybe<Asiento>>>
  GetAllAsientosBloqueados?: Maybe<Array<Maybe<AsignacionEntrada>>>
  GetAllBloques?: Maybe<Array<Maybe<Bloque>>>
  GetAllButacaEvento?: Maybe<GetAllButacaEvento>
  GetAllButacas?: Maybe<GetAllButacas>
  GetAllEntradasUsuario?: Maybe<Array<Maybe<AsignacionEntrada>>>
  GetAllEventos?: Maybe<GetAllEventos>
  GetAllEventosUsuario?: Maybe<GetAllEventos>
  GetAllImagenes?: Maybe<GetAllImagenes>
  GetAllPedidos?: Maybe<GetAllPedidos>
  GetAllPrecioReferencial?: Maybe<Array<Maybe<Referencial>>>
  GetAllSuscriptores?: Maybe<GetAllSuscriptores>
  GetAllVendedoras?: Maybe<GetAllVendedoras>
  GetAllVentas?: Maybe<GetAllVentas>
  GetDetalleAsientoVenta?: Maybe<AsignacionEntrada>
  GetEventoSlug?: Maybe<Evento>
  GetFeria?: Maybe<Feria>
  GetPedidoId?: Maybe<Pedido>
  GetReporteExcel?: Maybe<Scalars['String']>
  GetVentaId?: Maybe<Venta>
  ReporteGetAllPedidos?: Maybe<Scalars['String']>
  ReporteGetAllVentas?: Maybe<Scalars['String']>
}

export type QueryGetAllAsientosArgs = {
  eventoId?: InputMaybe<Scalars['Int']>
  tendido?: InputMaybe<Scalars['String']>
}

export type QueryGetAllAsientosAbonadosArgs = {
  feriaId?: InputMaybe<Scalars['Int']>
  tendido?: InputMaybe<Scalars['String']>
}

export type QueryGetAllBloquesArgs = {
  feriaId?: InputMaybe<Scalars['Int']>
  tendido?: InputMaybe<Scalars['String']>
}

export type QueryGetAllButacaEventoArgs = {
  eventoId?: InputMaybe<Scalars['Int']>
  tendido?: InputMaybe<Scalars['String']>
}

export type QueryGetAllButacasArgs = {
  tendido?: InputMaybe<Scalars['String']>
}

export type QueryGetAllEntradasUsuarioArgs = {
  eventoId?: InputMaybe<Scalars['Int']>
}

export type QueryGetAllEventosArgs = {
  estado?: InputMaybe<Scalars['String']>
  feriaId?: InputMaybe<Scalars['Int']>
}

export type QueryGetAllImagenesArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>
  pagina?: InputMaybe<Scalars['Int']>
}

export type QueryGetAllPedidosArgs = {
  email?: InputMaybe<Scalars['String']>
  fechaFinal?: InputMaybe<Scalars['String']>
  fechaInicial?: InputMaybe<Scalars['String']>
  numeroPagina?: InputMaybe<Scalars['Int']>
  pagina?: InputMaybe<Scalars['Int']>
  razonSocial?: InputMaybe<Scalars['String']>
}

export type QueryGetAllSuscriptoresArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>
  pagina?: InputMaybe<Scalars['Int']>
}

export type QueryGetAllVendedorasArgs = {
  estado?: InputMaybe<Scalars['String']>
  numeroPagina?: InputMaybe<Scalars['Int']>
  pagina?: InputMaybe<Scalars['Int']>
}

export type QueryGetAllVentasArgs = {
  fechaFinal?: InputMaybe<Scalars['String']>
  fechaInicial?: InputMaybe<Scalars['String']>
  numeroPagina?: InputMaybe<Scalars['Int']>
  pagina?: InputMaybe<Scalars['Int']>
  tipoVenta?: InputMaybe<Scalars['String']>
  vendedorId?: InputMaybe<Scalars['Int']>
}

export type QueryGetDetalleAsientoVentaArgs = {
  code?: InputMaybe<Scalars['String']>
}

export type QueryGetEventoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>
}

export type QueryGetPedidoIdArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>
}

export type QueryGetReporteExcelArgs = {
  pedidoId: Scalars['Int']
}

export type QueryGetVentaIdArgs = {
  ventaId?: InputMaybe<Scalars['Int']>
}

export type QueryReporteGetAllPedidosArgs = {
  email?: InputMaybe<Scalars['String']>
  fechaFinal?: InputMaybe<Scalars['String']>
  fechaInicial?: InputMaybe<Scalars['String']>
  razonSocial?: InputMaybe<Scalars['String']>
}

export type QueryReporteGetAllVentasArgs = {
  fechaFinal?: InputMaybe<Scalars['String']>
  fechaInicial?: InputMaybe<Scalars['String']>
  tipoVenta?: InputMaybe<Scalars['String']>
  vendedorId?: InputMaybe<Scalars['Int']>
}

export type Referencial = {
  __typename?: 'Referencial'
  precio?: Maybe<Scalars['Float']>
  referenciaId?: Maybe<Scalars['ID']>
  tendido?: Maybe<Scalars['String']>
  titulo?: Maybe<Scalars['String']>
}

export type ReferencialInput = {
  precio?: InputMaybe<Scalars['Float']>
  referenciaId?: InputMaybe<Scalars['ID']>
}

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Suscriptor = {
  __typename?: 'Suscriptor'
  email?: Maybe<Scalars['String']>
  nombres?: Maybe<Scalars['String']>
  suscriptorId?: Maybe<Scalars['ID']>
}

export type SuscriptorInput = {
  email?: InputMaybe<Scalars['String']>
  nombres?: InputMaybe<Scalars['String']>
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateAsistenciaInput = {
  asientoId?: InputMaybe<Scalars['ID']>
  constante?: InputMaybe<Scalars['String']>
  numDocumento?: InputMaybe<Scalars['String']>
  tipoDocumento?: InputMaybe<Scalars['String']>
}

export type UpdateEstadoEventoInput = {
  estado?: InputMaybe<Scalars['String']>
  eventoId?: InputMaybe<Scalars['ID']>
}

export type UpdateEstadoVendedoraInput = {
  estado?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
}

export type UpdatePasswordInput = {
  passwordAntiguo?: InputMaybe<Scalars['String']>
  passwordNuevo?: InputMaybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  apellidos?: Maybe<Scalars['String']>
  apiToken?: Maybe<Scalars['String']>
  celular?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  estado?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  nombres?: Maybe<Scalars['String']>
  numeroDocumento?: Maybe<Scalars['String']>
  tipoDocumento?: Maybe<Scalars['String']>
  tipoUsuario?: Maybe<Scalars['Int']>
}

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>
  celular?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  nombres?: InputMaybe<Scalars['String']>
  numeroDocumento?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  tipoDocumento?: InputMaybe<Scalars['String']>
}

export type Vendedora = {
  __typename?: 'Vendedora'
  apellidos?: Maybe<Scalars['String']>
  celular?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  estado?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  nombres?: Maybe<Scalars['String']>
  numeroDocumento?: Maybe<Scalars['String']>
  tipoDocumento?: Maybe<Scalars['String']>
}

export type VendedoraInput = {
  apellidos?: InputMaybe<Scalars['String']>
  celular?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  nombres?: InputMaybe<Scalars['String']>
  numeroDocumento?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  tipoDocumento?: InputMaybe<Scalars['String']>
}

export type Venta = {
  __typename?: 'Venta'
  DetalleVenta?: Maybe<Array<DetalleVenta>>
  Usuario?: Maybe<User>
  celular?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  fechaVenta?: Maybe<Scalars['Date']>
  numeroDocumento?: Maybe<Scalars['String']>
  precioTotal?: Maybe<Scalars['Float']>
  razonSocial?: Maybe<Scalars['String']>
  tipoComprobante?: Maybe<Scalars['String']>
  tipoDocumento?: Maybe<Scalars['String']>
  tipoVenta?: Maybe<Scalars['String']>
  usuarioId?: Maybe<Scalars['Int']>
  ventaId?: Maybe<Scalars['ID']>
}

export type VentaInput = {
  celular?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  fechaVenta?: InputMaybe<Scalars['Date']>
  numeroDocumento?: InputMaybe<Scalars['String']>
  precioTotal?: InputMaybe<Scalars['Float']>
  razonSocial?: InputMaybe<Scalars['String']>
  tipoComprobante?: InputMaybe<Scalars['String']>
  tipoDocumento?: InputMaybe<Scalars['String']>
  tipoVenta?: InputMaybe<Scalars['String']>
  transaccionId?: InputMaybe<Scalars['Float']>
  ventaId?: InputMaybe<Scalars['ID']>
}

export type CreateVentaMutationVariables = Exact<{
  input1: VentaInput
  input2?: InputMaybe<Array<DetalleVentaInput> | DetalleVentaInput>
}>

export type CreateVentaMutation = {
  __typename?: 'Mutation'
  CreateVenta: { __typename?: 'Venta'; ventaId?: string | null }
}

export type CreateVentaAbonadoMutationVariables = Exact<{
  input1: VentaInput
  input2?: InputMaybe<Array<DetalleVentaInput> | DetalleVentaInput>
}>

export type CreateVentaAbonadoMutation = {
  __typename?: 'Mutation'
  CreateVentaAbonado: { __typename?: 'Venta'; ventaId?: string | null }
}

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  Login?: {
    __typename?: 'User'
    id?: string | null
    email?: string | null
    tipoUsuario?: number | null
    tipoDocumento?: string | null
    numeroDocumento?: string | null
    nombres?: string | null
    apellidos?: string | null
    celular?: string | null
    apiToken?: string | null
  } | null
}

export type UpdateAsignacionEntradaVentaMutationVariables = Exact<{
  input: AsignacionEntradaVentaInput
}>

export type UpdateAsignacionEntradaVentaMutation = {
  __typename?: 'Mutation'
  UpdateAsignacionEntradaVenta?: { __typename?: 'AsignacionEntrada'; userId?: number | null } | null
}

export type GetAllAsientosQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>
  eventoId?: InputMaybe<Scalars['Int']>
}>

export type GetAllAsientosQuery = {
  __typename?: 'Query'
  GetAllAsientos?: Array<{
    __typename?: 'Asiento'
    asientoId?: string | null
    tendido?: string | null
    codigo?: string | null
    asiento?: string | null
    reservado?: string | null
  } | null> | null
}

export type GetAllAsientosAbonadosQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>
  feriaId?: InputMaybe<Scalars['Int']>
}>

export type GetAllAsientosAbonadosQuery = {
  __typename?: 'Query'
  GetAllAsientosAbonados?: Array<{
    __typename?: 'Asiento'
    asientoId?: string | null
    tendido?: string | null
    codigo?: string | null
    reservado?: string | null
    asiento?: string | null
    feriaId?: number | null
  } | null> | null
}

export type GetAllBloquesQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>
  feriaId?: InputMaybe<Scalars['Int']>
}>

export type GetAllBloquesQuery = {
  __typename?: 'Query'
  GetAllBloques?: Array<{
    __typename?: 'Bloque'
    bloqueId?: string | null
    tendido?: string | null
    asiento?: string | null
    codigo?: string | null
    reservado?: string | null
  } | null> | null
}

export type GetAllButacaEventoQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>
  eventoId?: InputMaybe<Scalars['Int']>
}>

export type GetAllButacaEventoQuery = {
  __typename?: 'Query'
  GetAllButacaEvento?: {
    __typename?: 'GetAllButacaEvento'
    numeroTotal?: number | null
    data?: Array<{
      __typename?: 'ButacaEvento'
      butacaEventoId?: number | null
      eventoId?: number | null
      tendido?: string | null
      codigo?: string | null
      precio?: number | null
      cantidad?: number | null
    } | null> | null
  } | null
}

export type GetAllButacasQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>
}>

export type GetAllButacasQuery = {
  __typename?: 'Query'
  GetAllButacas?: {
    __typename?: 'GetAllButacas'
    numeroTotal?: number | null
    data?: Array<{
      __typename?: 'Butaca'
      butacaId?: string | null
      tendido?: string | null
      codigo?: string | null
      cantidad?: number | null
      precio?: number | null
    } | null> | null
  } | null
}

export type GetAllEventosQueryVariables = Exact<{
  feriaId?: InputMaybe<Scalars['Int']>
  estado?: InputMaybe<Scalars['String']>
}>

export type GetAllEventosQuery = {
  __typename?: 'Query'
  GetAllEventos?: {
    __typename?: 'GetAllEventos'
    numeroTotal?: number | null
    data?: Array<{
      __typename?: 'Evento'
      eventoId?: string | null
      slug?: string | null
      titulo?: string | null
      descripcionCorta?: string | null
      descripcionLarga?: string | null
      terminosCondiciones?: string | null
      direccion?: string | null
      ubicacion?: string | null
      fecha?: any | null
      hora?: string | null
      fechaInicial?: any | null
      horaInicial?: string | null
      fechaFinal?: any | null
      horaFinal?: string | null
      estado?: string | null
      feriaId?: number | null
      imagenPrincipal?: {
        __typename?: 'Imagen'
        id?: string | null
        titulo?: string | null
        url?: string | null
      } | null
    }> | null
  } | null
}

export type GetAllPrecioReferencialQueryVariables = Exact<{ [key: string]: never }>

export type GetAllPrecioReferencialQuery = {
  __typename?: 'Query'
  GetAllPrecioReferencial?: Array<{
    __typename?: 'Referencial'
    tendido?: string | null
    precio?: number | null
    titulo?: string | null
    referenciaId?: string | null
  } | null> | null
}

export type GetAllVentasQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>
  numeroPagina?: InputMaybe<Scalars['Int']>
  vendedorId?: InputMaybe<Scalars['Int']>
  tipoVenta?: InputMaybe<Scalars['String']>
  fechaInicial?: InputMaybe<Scalars['String']>
  fechaFinal?: InputMaybe<Scalars['String']>
}>

export type GetAllVentasQuery = {
  __typename?: 'Query'
  GetAllVentas?: {
    __typename?: 'GetAllVentas'
    numeroTotal?: number | null
    data?: Array<{
      __typename?: 'Venta'
      ventaId?: string | null
      tipoComprobante?: string | null
      tipoDocumento?: string | null
      numeroDocumento?: string | null
      razonSocial?: string | null
      celular?: string | null
      tipoVenta?: string | null
      email?: string | null
      precioTotal?: number | null
      fechaVenta?: any | null
      DetalleVenta?: Array<{
        __typename?: 'DetalleVenta'
        detalleVentaId?: string | null
        tendido?: string | null
        codigo?: string | null
        asiento?: string | null
        precio?: number | null
        eventoId?: number | null
        feriaId?: number | null
        ventaId?: number | null
      }> | null
    }> | null
  } | null
}

export type GetDetalleAsientoVentaQueryVariables = Exact<{
  code?: InputMaybe<Scalars['String']>
}>

export type GetDetalleAsientoVentaQuery = {
  __typename?: 'Query'
  GetDetalleAsientoVenta?: {
    __typename?: 'AsignacionEntrada'
    asientoId?: string | null
    nombres?: string | null
    tipoDocumento?: string | null
    numDocumento?: string | null
    apellidos?: string | null
    reservado?: string | null
    tendido?: string | null
    codigo?: string | null
    fecha?: any | null
    hora?: string | null
  } | null
}

export type GetFeriaQueryVariables = Exact<{ [key: string]: never }>

export type GetFeriaQuery = {
  __typename?: 'Query'
  GetFeria?: {
    __typename?: 'Feria'
    feriaId?: string | null
    titulo?: string | null
    descripcionCorta?: string | null
    descripcionLarga?: string | null
    terminosCondiciones?: string | null
    fecha?: any | null
    hora?: string | null
    fechaInicial?: any | null
    horaInicial?: string | null
    fechaFinal?: any | null
    horaFinal?: string | null
    descuento?: number | null
    imagenPrincipal?: {
      __typename?: 'Imagen'
      id?: string | null
      titulo?: string | null
      url?: string | null
    } | null
    imagenSecundaria?: {
      __typename?: 'Imagen'
      id?: string | null
      titulo?: string | null
      url?: string | null
    } | null
  } | null
}

export type GetVentaIdQueryVariables = Exact<{
  ventaId?: InputMaybe<Scalars['Int']>
}>

export type GetVentaIdQuery = {
  __typename?: 'Query'
  GetVentaId?: {
    __typename?: 'Venta'
    ventaId?: string | null
    tipoComprobante?: string | null
    razonSocial?: string | null
    celular?: string | null
    precioTotal?: number | null
    fechaVenta?: any | null
    usuarioId?: number | null
    DetalleVenta?: Array<{
      __typename?: 'DetalleVenta'
      detalleVentaId?: string | null
      tendido?: string | null
      codigo?: string | null
      asiento?: string | null
      precio?: number | null
      feriaId?: number | null
      eventoId?: number | null
      Evento?: { __typename?: 'Evento'; titulo?: string | null } | null
    }> | null
  } | null
}

export const CreateVentaDocument = gql`
  mutation CreateVenta($input1: VentaInput!, $input2: [DetalleVentaInput!]) {
    CreateVenta(input1: $input1, input2: $input2) {
      ventaId
    }
  }
`
export type CreateVentaMutationFn = Apollo.MutationFunction<
  CreateVentaMutation,
  CreateVentaMutationVariables
>

/**
 * __useCreateVentaMutation__
 *
 * To run a mutation, you first call `useCreateVentaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVentaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVentaMutation, { data, loading, error }] = useCreateVentaMutation({
 *   variables: {
 *      input1: // value for 'input1'
 *      input2: // value for 'input2'
 *   },
 * });
 */
export function useCreateVentaMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateVentaMutation, CreateVentaMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateVentaMutation, CreateVentaMutationVariables>(
    CreateVentaDocument,
    options
  )
}
export type CreateVentaMutationHookResult = ReturnType<typeof useCreateVentaMutation>
export type CreateVentaMutationResult = Apollo.MutationResult<CreateVentaMutation>
export type CreateVentaMutationOptions = Apollo.BaseMutationOptions<
  CreateVentaMutation,
  CreateVentaMutationVariables
>
export const CreateVentaAbonadoDocument = gql`
  mutation CreateVentaAbonado($input1: VentaInput!, $input2: [DetalleVentaInput!]) {
    CreateVentaAbonado(input1: $input1, input2: $input2) {
      ventaId
    }
  }
`
export type CreateVentaAbonadoMutationFn = Apollo.MutationFunction<
  CreateVentaAbonadoMutation,
  CreateVentaAbonadoMutationVariables
>

/**
 * __useCreateVentaAbonadoMutation__
 *
 * To run a mutation, you first call `useCreateVentaAbonadoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVentaAbonadoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVentaAbonadoMutation, { data, loading, error }] = useCreateVentaAbonadoMutation({
 *   variables: {
 *      input1: // value for 'input1'
 *      input2: // value for 'input2'
 *   },
 * });
 */
export function useCreateVentaAbonadoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateVentaAbonadoMutation,
    CreateVentaAbonadoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateVentaAbonadoMutation, CreateVentaAbonadoMutationVariables>(
    CreateVentaAbonadoDocument,
    options
  )
}
export type CreateVentaAbonadoMutationHookResult = ReturnType<typeof useCreateVentaAbonadoMutation>
export type CreateVentaAbonadoMutationResult = Apollo.MutationResult<CreateVentaAbonadoMutation>
export type CreateVentaAbonadoMutationOptions = Apollo.BaseMutationOptions<
  CreateVentaAbonadoMutation,
  CreateVentaAbonadoMutationVariables
>
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    Login(input: $input) {
      id
      email
      tipoUsuario
      tipoDocumento
      numeroDocumento
      nombres
      apellidos
      celular
      apiToken
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const UpdateAsignacionEntradaVentaDocument = gql`
  mutation UpdateAsignacionEntradaVenta($input: AsignacionEntradaVentaInput!) {
    UpdateAsignacionEntradaVenta(input: $input) {
      userId
    }
  }
`
export type UpdateAsignacionEntradaVentaMutationFn = Apollo.MutationFunction<
  UpdateAsignacionEntradaVentaMutation,
  UpdateAsignacionEntradaVentaMutationVariables
>

/**
 * __useUpdateAsignacionEntradaVentaMutation__
 *
 * To run a mutation, you first call `useUpdateAsignacionEntradaVentaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAsignacionEntradaVentaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAsignacionEntradaVentaMutation, { data, loading, error }] = useUpdateAsignacionEntradaVentaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAsignacionEntradaVentaMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAsignacionEntradaVentaMutation,
    UpdateAsignacionEntradaVentaMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateAsignacionEntradaVentaMutation,
    UpdateAsignacionEntradaVentaMutationVariables
  >(UpdateAsignacionEntradaVentaDocument, options)
}
export type UpdateAsignacionEntradaVentaMutationHookResult = ReturnType<
  typeof useUpdateAsignacionEntradaVentaMutation
>
export type UpdateAsignacionEntradaVentaMutationResult =
  Apollo.MutationResult<UpdateAsignacionEntradaVentaMutation>
export type UpdateAsignacionEntradaVentaMutationOptions = Apollo.BaseMutationOptions<
  UpdateAsignacionEntradaVentaMutation,
  UpdateAsignacionEntradaVentaMutationVariables
>
export const GetAllAsientosDocument = gql`
  query GetAllAsientos($tendido: String, $eventoId: Int) {
    GetAllAsientos(tendido: $tendido, eventoId: $eventoId) {
      asientoId
      tendido
      codigo
      asiento
      reservado
    }
  }
`

/**
 * __useGetAllAsientosQuery__
 *
 * To run a query within a React component, call `useGetAllAsientosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAsientosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAsientosQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *      eventoId: // value for 'eventoId'
 *   },
 * });
 */
export function useGetAllAsientosQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllAsientosQuery, GetAllAsientosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllAsientosQuery, GetAllAsientosQueryVariables>(
    GetAllAsientosDocument,
    options
  )
}
export function useGetAllAsientosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllAsientosQuery, GetAllAsientosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllAsientosQuery, GetAllAsientosQueryVariables>(
    GetAllAsientosDocument,
    options
  )
}
export type GetAllAsientosQueryHookResult = ReturnType<typeof useGetAllAsientosQuery>
export type GetAllAsientosLazyQueryHookResult = ReturnType<typeof useGetAllAsientosLazyQuery>
export type GetAllAsientosQueryResult = Apollo.QueryResult<
  GetAllAsientosQuery,
  GetAllAsientosQueryVariables
>
export const GetAllAsientosAbonadosDocument = gql`
  query GetAllAsientosAbonados($tendido: String, $feriaId: Int) {
    GetAllAsientosAbonados(tendido: $tendido, feriaId: $feriaId) {
      asientoId
      tendido
      codigo
      reservado
      asiento
      feriaId
    }
  }
`

/**
 * __useGetAllAsientosAbonadosQuery__
 *
 * To run a query within a React component, call `useGetAllAsientosAbonadosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAsientosAbonadosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAsientosAbonadosQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *      feriaId: // value for 'feriaId'
 *   },
 * });
 */
export function useGetAllAsientosAbonadosQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllAsientosAbonadosQuery,
    GetAllAsientosAbonadosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>(
    GetAllAsientosAbonadosDocument,
    options
  )
}
export function useGetAllAsientosAbonadosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllAsientosAbonadosQuery,
    GetAllAsientosAbonadosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>(
    GetAllAsientosAbonadosDocument,
    options
  )
}
export type GetAllAsientosAbonadosQueryHookResult = ReturnType<
  typeof useGetAllAsientosAbonadosQuery
>
export type GetAllAsientosAbonadosLazyQueryHookResult = ReturnType<
  typeof useGetAllAsientosAbonadosLazyQuery
>
export type GetAllAsientosAbonadosQueryResult = Apollo.QueryResult<
  GetAllAsientosAbonadosQuery,
  GetAllAsientosAbonadosQueryVariables
>
export const GetAllBloquesDocument = gql`
  query GetAllBloques($tendido: String, $feriaId: Int) {
    GetAllBloques(tendido: $tendido, feriaId: $feriaId) {
      bloqueId
      tendido
      asiento
      codigo
      reservado
    }
  }
`

/**
 * __useGetAllBloquesQuery__
 *
 * To run a query within a React component, call `useGetAllBloquesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBloquesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBloquesQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *      feriaId: // value for 'feriaId'
 *   },
 * });
 */
export function useGetAllBloquesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllBloquesQuery, GetAllBloquesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllBloquesQuery, GetAllBloquesQueryVariables>(
    GetAllBloquesDocument,
    options
  )
}
export function useGetAllBloquesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllBloquesQuery, GetAllBloquesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllBloquesQuery, GetAllBloquesQueryVariables>(
    GetAllBloquesDocument,
    options
  )
}
export type GetAllBloquesQueryHookResult = ReturnType<typeof useGetAllBloquesQuery>
export type GetAllBloquesLazyQueryHookResult = ReturnType<typeof useGetAllBloquesLazyQuery>
export type GetAllBloquesQueryResult = Apollo.QueryResult<
  GetAllBloquesQuery,
  GetAllBloquesQueryVariables
>
export const GetAllButacaEventoDocument = gql`
  query GetAllButacaEvento($tendido: String, $eventoId: Int) {
    GetAllButacaEvento(tendido: $tendido, eventoId: $eventoId) {
      data {
        butacaEventoId
        eventoId
        tendido
        codigo
        precio
        cantidad
      }
      numeroTotal
    }
  }
`

/**
 * __useGetAllButacaEventoQuery__
 *
 * To run a query within a React component, call `useGetAllButacaEventoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllButacaEventoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllButacaEventoQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *      eventoId: // value for 'eventoId'
 *   },
 * });
 */
export function useGetAllButacaEventoQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllButacaEventoQuery, GetAllButacaEventoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllButacaEventoQuery, GetAllButacaEventoQueryVariables>(
    GetAllButacaEventoDocument,
    options
  )
}
export function useGetAllButacaEventoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllButacaEventoQuery,
    GetAllButacaEventoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllButacaEventoQuery, GetAllButacaEventoQueryVariables>(
    GetAllButacaEventoDocument,
    options
  )
}
export type GetAllButacaEventoQueryHookResult = ReturnType<typeof useGetAllButacaEventoQuery>
export type GetAllButacaEventoLazyQueryHookResult = ReturnType<
  typeof useGetAllButacaEventoLazyQuery
>
export type GetAllButacaEventoQueryResult = Apollo.QueryResult<
  GetAllButacaEventoQuery,
  GetAllButacaEventoQueryVariables
>
export const GetAllButacasDocument = gql`
  query GetAllButacas($tendido: String) {
    GetAllButacas(tendido: $tendido) {
      numeroTotal
      data {
        butacaId
        tendido
        codigo
        cantidad
        precio
      }
    }
  }
`

/**
 * __useGetAllButacasQuery__
 *
 * To run a query within a React component, call `useGetAllButacasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllButacasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllButacasQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *   },
 * });
 */
export function useGetAllButacasQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllButacasQuery, GetAllButacasQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllButacasQuery, GetAllButacasQueryVariables>(
    GetAllButacasDocument,
    options
  )
}
export function useGetAllButacasLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllButacasQuery, GetAllButacasQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllButacasQuery, GetAllButacasQueryVariables>(
    GetAllButacasDocument,
    options
  )
}
export type GetAllButacasQueryHookResult = ReturnType<typeof useGetAllButacasQuery>
export type GetAllButacasLazyQueryHookResult = ReturnType<typeof useGetAllButacasLazyQuery>
export type GetAllButacasQueryResult = Apollo.QueryResult<
  GetAllButacasQuery,
  GetAllButacasQueryVariables
>
export const GetAllEventosDocument = gql`
  query GetAllEventos($feriaId: Int, $estado: String) {
    GetAllEventos(feriaId: $feriaId, estado: $estado) {
      numeroTotal
      data {
        eventoId
        slug
        titulo
        descripcionCorta
        descripcionLarga
        terminosCondiciones
        direccion
        ubicacion
        fecha
        hora
        imagenPrincipal {
          id
          titulo
          url
        }
        fechaInicial
        horaInicial
        fechaFinal
        horaFinal
        estado
        feriaId
      }
    }
  }
`

/**
 * __useGetAllEventosQuery__
 *
 * To run a query within a React component, call `useGetAllEventosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEventosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEventosQuery({
 *   variables: {
 *      feriaId: // value for 'feriaId'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllEventosQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllEventosQuery, GetAllEventosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllEventosQuery, GetAllEventosQueryVariables>(
    GetAllEventosDocument,
    options
  )
}
export function useGetAllEventosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllEventosQuery, GetAllEventosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllEventosQuery, GetAllEventosQueryVariables>(
    GetAllEventosDocument,
    options
  )
}
export type GetAllEventosQueryHookResult = ReturnType<typeof useGetAllEventosQuery>
export type GetAllEventosLazyQueryHookResult = ReturnType<typeof useGetAllEventosLazyQuery>
export type GetAllEventosQueryResult = Apollo.QueryResult<
  GetAllEventosQuery,
  GetAllEventosQueryVariables
>
export const GetAllPrecioReferencialDocument = gql`
  query GetAllPrecioReferencial {
    GetAllPrecioReferencial {
      tendido
      precio
      titulo
      referenciaId
    }
  }
`

/**
 * __useGetAllPrecioReferencialQuery__
 *
 * To run a query within a React component, call `useGetAllPrecioReferencialQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPrecioReferencialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPrecioReferencialQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPrecioReferencialQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllPrecioReferencialQuery,
    GetAllPrecioReferencialQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>(
    GetAllPrecioReferencialDocument,
    options
  )
}
export function useGetAllPrecioReferencialLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllPrecioReferencialQuery,
    GetAllPrecioReferencialQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>(
    GetAllPrecioReferencialDocument,
    options
  )
}
export type GetAllPrecioReferencialQueryHookResult = ReturnType<
  typeof useGetAllPrecioReferencialQuery
>
export type GetAllPrecioReferencialLazyQueryHookResult = ReturnType<
  typeof useGetAllPrecioReferencialLazyQuery
>
export type GetAllPrecioReferencialQueryResult = Apollo.QueryResult<
  GetAllPrecioReferencialQuery,
  GetAllPrecioReferencialQueryVariables
>
export const GetAllVentasDocument = gql`
  query GetAllVentas(
    $pagina: Int
    $numeroPagina: Int
    $vendedorId: Int
    $tipoVenta: String
    $fechaInicial: String
    $fechaFinal: String
  ) {
    GetAllVentas(
      pagina: $pagina
      numeroPagina: $numeroPagina
      vendedorId: $vendedorId
      tipoVenta: $tipoVenta
      fechaInicial: $fechaInicial
      fechaFinal: $fechaFinal
    ) {
      numeroTotal
      data {
        ventaId
        tipoComprobante
        tipoDocumento
        numeroDocumento
        razonSocial
        celular
        tipoVenta
        email
        precioTotal
        fechaVenta
        DetalleVenta {
          detalleVentaId
          tendido
          codigo
          asiento
          precio
          eventoId
          feriaId
          ventaId
        }
      }
      numeroTotal
    }
  }
`

/**
 * __useGetAllVentasQuery__
 *
 * To run a query within a React component, call `useGetAllVentasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVentasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVentasQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *      vendedorId: // value for 'vendedorId'
 *      tipoVenta: // value for 'tipoVenta'
 *      fechaInicial: // value for 'fechaInicial'
 *      fechaFinal: // value for 'fechaFinal'
 *   },
 * });
 */
export function useGetAllVentasQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllVentasQuery, GetAllVentasQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllVentasQuery, GetAllVentasQueryVariables>(
    GetAllVentasDocument,
    options
  )
}
export function useGetAllVentasLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllVentasQuery, GetAllVentasQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllVentasQuery, GetAllVentasQueryVariables>(
    GetAllVentasDocument,
    options
  )
}
export type GetAllVentasQueryHookResult = ReturnType<typeof useGetAllVentasQuery>
export type GetAllVentasLazyQueryHookResult = ReturnType<typeof useGetAllVentasLazyQuery>
export type GetAllVentasQueryResult = Apollo.QueryResult<
  GetAllVentasQuery,
  GetAllVentasQueryVariables
>
export const GetDetalleAsientoVentaDocument = gql`
  query GetDetalleAsientoVenta($code: String) {
    GetDetalleAsientoVenta(code: $code) {
      asientoId
      nombres
      tipoDocumento
      numDocumento
      nombres
      apellidos
      reservado
      tendido
      codigo
      fecha
      hora
    }
  }
`

/**
 * __useGetDetalleAsientoVentaQuery__
 *
 * To run a query within a React component, call `useGetDetalleAsientoVentaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDetalleAsientoVentaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDetalleAsientoVentaQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetDetalleAsientoVentaQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDetalleAsientoVentaQuery,
    GetDetalleAsientoVentaQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDetalleAsientoVentaQuery, GetDetalleAsientoVentaQueryVariables>(
    GetDetalleAsientoVentaDocument,
    options
  )
}
export function useGetDetalleAsientoVentaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDetalleAsientoVentaQuery,
    GetDetalleAsientoVentaQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDetalleAsientoVentaQuery, GetDetalleAsientoVentaQueryVariables>(
    GetDetalleAsientoVentaDocument,
    options
  )
}
export type GetDetalleAsientoVentaQueryHookResult = ReturnType<
  typeof useGetDetalleAsientoVentaQuery
>
export type GetDetalleAsientoVentaLazyQueryHookResult = ReturnType<
  typeof useGetDetalleAsientoVentaLazyQuery
>
export type GetDetalleAsientoVentaQueryResult = Apollo.QueryResult<
  GetDetalleAsientoVentaQuery,
  GetDetalleAsientoVentaQueryVariables
>
export const GetFeriaDocument = gql`
  query GetFeria {
    GetFeria {
      feriaId
      titulo
      descripcionCorta
      descripcionLarga
      terminosCondiciones
      imagenPrincipal {
        id
        titulo
        url
      }
      imagenSecundaria {
        id
        titulo
        url
      }
      fecha
      hora
      fechaInicial
      horaInicial
      fechaFinal
      horaFinal
      descuento
    }
  }
`

/**
 * __useGetFeriaQuery__
 *
 * To run a query within a React component, call `useGetFeriaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeriaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeriaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeriaQuery(
  baseOptions?: Apollo.QueryHookOptions<GetFeriaQuery, GetFeriaQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetFeriaQuery, GetFeriaQueryVariables>(GetFeriaDocument, options)
}
export function useGetFeriaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFeriaQuery, GetFeriaQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetFeriaQuery, GetFeriaQueryVariables>(GetFeriaDocument, options)
}
export type GetFeriaQueryHookResult = ReturnType<typeof useGetFeriaQuery>
export type GetFeriaLazyQueryHookResult = ReturnType<typeof useGetFeriaLazyQuery>
export type GetFeriaQueryResult = Apollo.QueryResult<GetFeriaQuery, GetFeriaQueryVariables>
export const GetVentaIdDocument = gql`
  query GetVentaId($ventaId: Int) {
    GetVentaId(ventaId: $ventaId) {
      ventaId
      tipoComprobante
      razonSocial
      celular
      precioTotal
      fechaVenta
      usuarioId
      DetalleVenta {
        detalleVentaId
        tendido
        codigo
        asiento
        precio
        feriaId
        eventoId
        Evento {
          titulo
        }
      }
    }
  }
`

/**
 * __useGetVentaIdQuery__
 *
 * To run a query within a React component, call `useGetVentaIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVentaIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVentaIdQuery({
 *   variables: {
 *      ventaId: // value for 'ventaId'
 *   },
 * });
 */
export function useGetVentaIdQuery(
  baseOptions?: Apollo.QueryHookOptions<GetVentaIdQuery, GetVentaIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetVentaIdQuery, GetVentaIdQueryVariables>(GetVentaIdDocument, options)
}
export function useGetVentaIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetVentaIdQuery, GetVentaIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetVentaIdQuery, GetVentaIdQueryVariables>(GetVentaIdDocument, options)
}
export type GetVentaIdQueryHookResult = ReturnType<typeof useGetVentaIdQuery>
export type GetVentaIdLazyQueryHookResult = ReturnType<typeof useGetVentaIdLazyQuery>
export type GetVentaIdQueryResult = Apollo.QueryResult<GetVentaIdQuery, GetVentaIdQueryVariables>
