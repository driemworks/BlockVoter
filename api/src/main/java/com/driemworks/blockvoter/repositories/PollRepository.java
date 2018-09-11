package com.driemworks.blockvoter.repositories;

import com.driemworks.blockvoter.model.PollDTO;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * @author Tony
 */
public interface PollRepository extends MongoRepository<PollDTO, String> {

    List<PollDTO> findByChairmanAddress(String chairmanAddress);

}
