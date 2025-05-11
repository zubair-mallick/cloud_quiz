package com.example.repositories;

import com.example.models.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface QuizRepository extends JpaRepository<Quiz, UUID> {
}
