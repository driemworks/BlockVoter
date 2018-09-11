package com.driemworks.blockvoter.responses;

import java.util.List;

/**
 * @author Tony
 */
public class RetrievePollResponse {

    private List<String> contractAddresses;

    public RetrievePollResponse(List<String> contractAddresses) {
        this.contractAddresses = contractAddresses;
    }

    public List<String> getContractAddresses() {
        return contractAddresses;
    }

    public void setContractAddresses(List<String> contractAddresses) {
        this.contractAddresses = contractAddresses;
    }
}
