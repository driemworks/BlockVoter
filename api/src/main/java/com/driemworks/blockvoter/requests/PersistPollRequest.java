package com.driemworks.blockvoter.requests;

/**
 * The request object for persisting a new poll
 * @author Tony
 */
public class PersistPollRequest {

    /** The poll address */
    private String pollAddress;

    /** The chairman address */
    private String chairmanAddress;

    /**
     * Getter for the poll address
     * @return {@link String}
     */
    public String getPollAddress() {
        return pollAddress;
    }

    /**
     * Setter for the poll address
     * @param pollAddress The poll address to set
     */
    public void setPollAddress(String pollAddress) {
        this.pollAddress = pollAddress;
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
