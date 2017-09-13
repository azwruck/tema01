package sape.server.crud.entry.repository;

import org.springframework.stereotype.Repository;

import sape.server.crud.base.repository.AbstractCRUDRepository;
import sape.server.model.entry.EntryEntity;

/**
 * Resposit�rio de {@link EntryEntity}.
 *
 * @author Guilherme Dalmarco (dalmarco.gd@gmail.com)
 */
@Repository
public class EntryCRUDRepository extends AbstractCRUDRepository<EntryEntity> {
}