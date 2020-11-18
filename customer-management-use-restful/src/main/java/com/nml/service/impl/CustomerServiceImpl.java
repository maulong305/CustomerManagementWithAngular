package com.nml.service.impl;

import com.nml.model.Customer;
import com.nml.repository.impl.CustomerRepository;
import com.nml.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



public class CustomerServiceImpl implements CustomerService {
   @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Iterable<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Customer findById(Long id) {
        return customerRepository.findOne(id);
    }

    @Override
    public void save(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public void remove(Long id) {
        customerRepository.delete(id);
    }
}
