package com.driemworks.blockvoter.responses;

/**
 * @author Tony
 */
public class CreatePollResponse {

    private String message;

    public CreatePollResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
