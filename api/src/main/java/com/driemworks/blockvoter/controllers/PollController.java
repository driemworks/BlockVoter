package com.driemworks.blockvoter.controllers;

import com.driemworks.blockvoter.requests.PersistPollRequest;
import com.driemworks.blockvoter.responses.PersistPollResponse;
import com.driemworks.blockvoter.responses.RetrievePollResponse;
import com.driemworks.blockvoter.service.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author Tony
 */
@RestController
public class PollController {

    /**
     * The poll service
     */
    @Autowired
    private PollService pollService;

    /**
     * POST a new poll
     * Saves the poll to the database
     * @param persistPollRequest The create poll request
     * @return {@link PersistPollResponse}
     */
    @CrossOrigin(origins="http://localhost:4200")
    @RequestMapping(value="/poll", method=RequestMethod.POST)
    public PersistPollResponse savePoll(@RequestBody PersistPollRequest persistPollRequest) {
        return pollService.persistPoll(persistPollRequest);
    }

    /**
     * GET all polls by chairman address
     * @param chairmanAddress The chairman address
     * @return {@link RetrievePollResponse}
     */
    @CrossOrigin(origins="http://localhost:4200")
    @RequestMapping(value="/poll", method=RequestMethod.GET)
    public RetrievePollResponse findPollByChairmanAddress(String chairmanAddress) {
        return pollService.findByChairman(chairmanAddress);
    }
}
