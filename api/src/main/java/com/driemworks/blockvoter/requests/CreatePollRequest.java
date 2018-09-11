package com.driemworks.blockvoter.requests;

/**
 * @author Tony
 */
public class CreatePollRequest {

    private String pollAddress;

    private String chairmanAddress;

    public String getPollAddress() {
        return pollAddress;
    }

    public void setPollAddress(String pollAddress) {
        this.pollAddress = pollAddress;
    }

    public String getChairmanAddress() {
        return chairmanAddress;
    }

    public void setChairmanAddress(String chairmanAddress) {
        this.chairmanAddress = chairmanAddress;
    }
}
