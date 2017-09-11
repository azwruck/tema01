package sape.server.crud.person.repository;

import org.springframework.stereotype.Repository;

import sape.server.crud.base.repository.AbstractCRUDRepository;
import sape.server.model.person.PersonEntity;

/**
 * Resposit�rio de {@link PersonEntity}.
 *
 * @author Guilherme Dalmarco (dalmarco.gd@gmail.com)
 */
@Repository
public class PersonCRUDRepository extends AbstractCRUDRepository<PersonEntity> {
}