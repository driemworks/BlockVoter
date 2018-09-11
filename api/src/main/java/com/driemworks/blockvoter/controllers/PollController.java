package com.driemworks.blockvoter.controllers;

import com.driemworks.blockvoter.requests.CreatePollRequest;
import com.driemworks.blockvoter.responses.CreatePollResponse;
import com.driemworks.blockvoter.responses.RetrievePollResponse;
import com.driemworks.blockvoter.service.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author Tony
 */
@RestController
public class PollController {

    @Autowired
    private PollService pollService;

    @CrossOrigin(origins="http://localhost:4200")
    @RequestMapping(value="/poll", method=RequestMethod.POST)
    public CreatePollResponse savePoll(@RequestBody CreatePollRequest createPollRequest) {
        return pollService.createPoll(createPollRequest);
    }

    @CrossOrigin(origins="http://localhost:4200")
    @RequestMapping(value="/poll", method=RequestMethod.GET)
    public RetrievePollResponse findPollByChairmanAddress(String chairmanAddress) {
        return pollService.findByChairman(chairmanAddress);
    }
}
