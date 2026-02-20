package org.example.jsonconverter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.example.jsonconverter.entity.Users;

public interface UserRepository extends JpaRepository<Users,Long> {
    Users findByUsername(String username);
}
