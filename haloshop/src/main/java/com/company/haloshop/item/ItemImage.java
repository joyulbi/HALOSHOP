package com.company.haloshop.item;

import lombok.Data;

@Data
public class ItemImage {
    private Long id;
    private Long itemsId;  // 상품 ID (FK)
    private String url;    // 이미지 파일 경로
}
