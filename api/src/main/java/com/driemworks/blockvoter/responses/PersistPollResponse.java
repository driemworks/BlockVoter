package com.driemworks.blockvoter.responses;

/**
 * The response returned when a poll is successfully persisted
 * @author Tony
 */
public class PersistPollResponse {

    /** The message */
    private String message;

    /**
     * The constructor with message
     * @param message The message
     */
    public PersistPollResponse(String message) {
        this.message = message;
    }

    /**
     * Geter for the message
     * @return {@link String}
     */
    public String getMessage() {
        return message;
    }

    /**
     * Setter for the message
     * @param message The message to set
     */
    public void setMessage(String message) {
        this.message = message;
    }
}
