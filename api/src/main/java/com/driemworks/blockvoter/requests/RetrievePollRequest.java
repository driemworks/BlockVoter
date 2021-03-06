package com.driemworks.blockvoter.requests;

/**
 * The request object for retriving a poll  by chairman address
 * @author Tony
 */
public class RetrievePollRequest {

    /** The chairman address */
    private String chairmanAddress;

    /**
     * The default constructor
     */
    public RetrievePollRequest() {
    }

    /**
     * The constructor with the chairman address
     * @param chairmanAddress The chairman address
     */
    public RetrievePollRequest(String chairmanAddress) {
        this.chairmanAddress = chairmanAddress;
    }

    /**
     * Getter for the chairman address
     * @return {@link String}
     */
    public String getChairmanAddress() {
        return chairmanAddress;
    }

    /**
     * Setter for the chairman address
     * @param chairmanAddress The chairman address to set
     */
    public void setChairmanAddress(String chairmanAddress) {
        this.chairmanAddress = chairmanAddress;
    }
}
