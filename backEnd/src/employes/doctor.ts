
import { Employee, Positions} from './Employee'
import { Ticket, StatusType } from '@/attending/ticket'

export class Doctor extends Employee {
  constructor(
    id: number,
    name: string,
    cpf: number,
    public crm: string,
  ) {
    super(id, name, cpf, Positions.Doctor)
  }

  updateStatus(ticket: Ticket, status: StatusType): void {
    ticket.status = status
  }
}
