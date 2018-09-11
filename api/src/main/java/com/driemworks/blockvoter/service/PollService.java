package com.driemworks.blockvoter.service;

import com.driemworks.blockvoter.requests.CreatePollRequest;
import com.driemworks.blockvoter.responses.CreatePollResponse;
import com.driemworks.blockvoter.responses.RetrievePollResponse;

/**
 * @author Tony
 */
public interface PollService {

    CreatePollResponse createPoll(CreatePollRequest createPollRequest);

    RetrievePollResponse findByChairman(String chairman);


}
