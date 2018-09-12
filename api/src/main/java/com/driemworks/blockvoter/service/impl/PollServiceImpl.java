package com.driemworks.blockvoter.service.impl;

import com.driemworks.blockvoter.model.PollDTO;
import com.driemworks.blockvoter.repositories.PollRepository;
import com.driemworks.blockvoter.requests.PersistPollRequest;
import com.driemworks.blockvoter.responses.PersistPollResponse;
import com.driemworks.blockvoter.responses.RetrievePollResponse;
import com.driemworks.blockvoter.service.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

/**
 * The poll service implementation
 * @author Tony
 */
@Component
public class PollServiceImpl implements PollService {

    /**
     * The poll repository
     */
    @Autowired
    private PollRepository pollRepository;

    /**
     * {@inheritDoc}
     */
    @Override
    public PersistPollResponse persistPoll(PersistPollRequest persistPollRequest) {
        PollDTO pollDTO = new PollDTO(persistPollRequest.getPollAddress(), persistPollRequest.getChairmanAddress(), null);
        pollRepository.save(pollDTO);
        return new PersistPollResponse("Poll saved.");
    }

    /**
     * {@inheritDoc }
     */
    @Override
    public RetrievePollResponse findByChairman(String chairman) {
        List<PollDTO> polls = pollRepository.findByChairmanAddress(chairman);
        List<String> pollAddresses = polls.parallelStream().map(p -> p.contractAddress).collect(Collectors.toList());
        return new RetrievePollResponse(pollAddresses);
    }
}
