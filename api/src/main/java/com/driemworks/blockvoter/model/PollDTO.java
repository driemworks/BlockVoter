package com.driemworks.blockvoter.model;

import org.springframework.data.annotation.Id;

import java.util.List;

/**
 * @author Tony
 */
public class PollDTO {

    @Id
    public String contractAddress;

    public String chairmanAddress;

    public List<String> participatingNodeAddresses;

    public PollDTO(String contractAddress, String chairmanAddress, List<String> participatingNodeAddresses) {
        this.contractAddress = contractAddress;
        this.chairmanAddress = chairmanAddress;
        this.participatingNodeAddresses = participatingNodeAddresses;
    }

    @Override
    public String toString() {
        return "PollDTO{" +
                "contractAddress='" + contractAddress + '\'' +
                ", chairmanAddress='" + chairmanAddress + '\'' +
                ", participatingNodeAddresses=" + participatingNodeAddresses +
                '}';
    }
}
