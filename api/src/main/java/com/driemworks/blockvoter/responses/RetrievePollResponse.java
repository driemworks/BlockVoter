package com.driemworks.blockvoter.responses;

import java.util.List;

/**
 * The response returned when retrieving poll data
 * @author Tony
 */
public class RetrievePollResponse {

    /** The list of contract addresses of retrieved polls */
    private List<String> contractAddresses;

    /**
     * The constructor with poll addresses
     * @param contractAddresses The List of poll addresses
     */
    public RetrievePollResponse(List<String> contractAddresses) {
        this.contractAddresses = contractAddresses;
    }

    /**
     * Getter for the contract addresses
     * @return {@link List}
     */
    public List<String> getContractAddresses() {
        return contractAddresses;
    }

    /**
     * Setter for the contract addresses
     * @param contractAddresses The contract addresses to set
     */
    public void setContractAddresses(List<String> contractAddresses) {
        this.contractAddresses = contractAddresses;
    }
}
