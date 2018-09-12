package com.driemworks.blockvoter.service;

import com.driemworks.blockvoter.requests.PersistPollRequest;
import com.driemworks.blockvoter.responses.PersistPollResponse;
import com.driemworks.blockvoter.responses.RetrievePollResponse;

/**
 * The Poll Service
 * @author Tony
 */
public interface PollService {

    /**
     * Persist a poll
     * @param persistPollRequest The PersistPollRequest
     * @return {@link PersistPollResponse}
     */
    PersistPollResponse persistPoll(PersistPollRequest persistPollRequest);

    /**
     * Find a poll by chairman
     * @param chairman The chairman's node address
     * @return {@link RetrievePollResponse}
     */
    RetrievePollResponse findByChairman(String chairman);

}
