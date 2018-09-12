package com.driemworks.blockvoter.model;

import org.springframework.data.annotation.Id;

import java.util.List;

/**
 * The Poll Data transfer object
 * @author Tony
 */
public class PollDTO {

    /**
     * The contract address
     */
    @Id
    public String contractAddress;

    /**
     * The chairman address
     */
    public String chairmanAddress;

    /**
     * The list of nodes participating in the poll
     */
    public List<String> participatingNodeAddresses;

    /**
     * The constructor with all fields
     * @param contractAddress The contract address
     * @param chairmanAddress The chairman address
     * @param participatingNodeAddresses The addresses of all participating nodes
     */
    public PollDTO(String contractAddress, String chairmanAddress, List<String> participatingNodeAddresses) {
        this.contractAddress = contractAddress;
        this.chairmanAddress = chairmanAddress;
        this.participatingNodeAddresses = participatingNodeAddresses;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String toString() {
        return "PollDTO{" +
                "contractAddress='" + contractAddress + '\'' +
                ", chairmanAddress='" + chairmanAddress + '\'' +
                ", participatingNodeAddresses=" + participatingNodeAddresses +
                '}';
    }
}
