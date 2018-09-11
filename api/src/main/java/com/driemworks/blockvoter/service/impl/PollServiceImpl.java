package com.driemworks.blockvoter.service.impl;

import com.driemworks.blockvoter.model.PollDTO;
import com.driemworks.blockvoter.repositories.PollRepository;
import com.driemworks.blockvoter.requests.CreatePollRequest;
import com.driemworks.blockvoter.responses.CreatePollResponse;
import com.driemworks.blockvoter.responses.RetrievePollResponse;
import com.driemworks.blockvoter.service.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Tony
 */
@Component
public class PollServiceImpl implements PollService {

    @Autowired
    private PollRepository pollRepository;

    @Override
    public CreatePollResponse createPoll(CreatePollRequest createPollRequest) {
        PollDTO pollDTO = new PollDTO(createPollRequest.getPollAddress(), createPollRequest.getChairmanAddress(), null);
        pollRepository.save(pollDTO);
        return new CreatePollResponse("Poll saved.");
    }

    @Override
    public RetrievePollResponse findByChairman(String chairman) {
        List<PollDTO> polls = pollRepository.findByChairmanAddress(chairman);
        List<String> pollAddresses = polls.parallelStream().map(p -> p.contractAddress).collect(Collectors.toList());
        return new RetrievePollResponse(pollAddresses);
    }
}
