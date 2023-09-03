package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "Todo")       // 데이터베이스의 Todo 테이블에 매핑된다는 뜻. 추가하지 않으면 @Entity이름 -> 클래스 이름
public class TodoEntity {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")    // strategy라는 변수에 uuid를 사용하여 system-uuid라는 generator에 넘김.
    private String id;
    private String userId;
    private String title;
    private boolean done;

}
