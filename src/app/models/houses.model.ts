export interface ApiModel {
  jsonapi: JsonApiModel;
  data: HousesModel[];
  meta: MetaModel;
  links: LinksPaginatorModel;
}

interface JsonApiModel {
  version: string;
  meta: MetaApiModel;
}

interface MetaApiModel {
  links: LinksModel;
}

export interface HousesModel {
  type: string;
  id: string;
  links: LinksModel;
  attributes: AttributesModel;
}

export interface MetaModel {
  count: string;
}

export interface LinksPaginatorModel {
  last: SelfModel;
  next: SelfModel;
  self: SelfModel;
}

interface LinksModel {
  self: SelfModel;
}

interface SelfModel {
  href: string;
}

interface AttributesModel {
  field_inmu_nume_habi: number;
  field_inmu_prec: string;
  field_inmu_refe: string;
  field_inmu_tipo_via: string;
  field_inmu_area_cons: string;
  field_inmu_imag_arra: string[];
  field_inmu_nomb_call: string;
  field_inmu_desc?: DescriptionModel;
}

interface DescriptionModel {
  format: string | null;
  processed: string | null;
  value: string | null;
}
