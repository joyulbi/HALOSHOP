package com.company.haloshop.item;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ItemImageMapper {

    void insert(ItemImage itemImage);

    List<ItemImage> findByItemsId(Long itemsId);

    void delete(Long id);

    void deleteByItemsId(Long itemsId); // 상품 삭제 시 이미지 일괄 삭제
}
