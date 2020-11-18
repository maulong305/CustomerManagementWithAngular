package com.nml.service;

import com.nml.model.Customer;

public interface CustomerService {
    Iterable<Customer> findAll();
    Customer findById(Long id);
    void save(Customer customer);
    void remove(Long id);
}
