package com.driemworks.blockvoter.requests;

/**
 * @author Tony
 */
public class RetrievePollRequest {

    private String chairmanAddress;

    public RetrievePollRequest() {
    }

    public RetrievePollRequest(String chairmanAddress) {
        this.chairmanAddress = chairmanAddress;
    }

    public String getChairmanAddress() {
        return chairmanAddress;
    }

    public void setChairmanAddress(String chairmanAddress) {
        this.chairmanAddress = chairmanAddress;
    }
}
