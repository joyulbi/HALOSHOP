package com.company.haloshop.item;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Item {
    private Long id;
    private String name;
    private String description;
    private int price;
    private Long teamId;      // 팀 테이블 FK
    private Long categoryId;  // 카테고리 테이블 FK
    private LocalDateTime createdAt;
}
