export interface TableHeaderFields {
  id?: number
  name?: string
  dataType?: string
  description?: string
}

export interface TableDataHeader {
  fields: TableHeaderFields[]
}

export interface PersonInfo {
  data: PersonInfoData[]
}

export interface PersonInfoData {
  lastname?: string
  firstname?: string
  patronymic?: string
  email?: string
  phone?: string
  address?: string
  birthdate?: string
  createdAt?: string
}
