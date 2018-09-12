package com.driemworks.blockvoter.repositories;

import com.driemworks.blockvoter.model.PollDTO;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * The poll repository object (to be used with mongodb)
 * @author Tony
 */
public interface PollRepository extends MongoRepository<PollDTO, String> {

    /**
     * Find a poll by chairman address
     * @param chairmanAddress The chairman address
     * @return {@link List<PollDTO>}
     */
    List<PollDTO> findByChairmanAddress(String chairmanAddress);

}
