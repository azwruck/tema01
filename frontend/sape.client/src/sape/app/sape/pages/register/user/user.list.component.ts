import { ServiceLocator } from './../../../../service/locator/service.locator';
import { LocalDataSource } from 'ng2-smart-table';
import {Component} from "@angular/core";
import {TableService} from '../../../../components/table/table.service';
import {UserCrudService} from '../../../../service/crud/user/user.crud.service';
import {UserDTO} from '../../../../model/user/user.dto';

/**
 * Created by Guilherme on 03/04/2017.
 */

@Component({
  moduleId: module.id,
  selector: 'users-list',
  styleUrls: ['./user.list.component.css'],
  templateUrl: './user.list.component.html',
})
export class UserListComponent {

  userCrudService() {
    return ServiceLocator.get(UserCrudService);
  }

  getListService(): TableService<UserDTO> {
    return this.userCrudService();
  }

  protected getColumns() : {} {
    return {
          code: {
            title: 'Código'
          },
          name: {
            title: 'Nome'
          },
          description: {
            title: 'Descrição'
          },
          prefix: {
            title: 'Prefixo'
          },
          basePackage: {
            title: 'Base package'
          } 
      };
  }
}
