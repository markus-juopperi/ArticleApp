package com.markusjuopperi.dockerdemo.model.article


import com.markusjuopperi.dockerdemo.model.article.author.Author
import java.util.*
import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity
data class Article (

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @get: NotBlank
    val title: String = "",

    @get: NotBlank
    val content: String = "",

    @OneToOne(cascade = [CascadeType.ALL])
    val author: Author,

    val date: Date = Date()
)