package com.markusjuopperi.dockerdemo.controller

import com.markusjuopperi.dockerdemo.model.article.Article
import com.markusjuopperi.dockerdemo.model.article.ArticleRepository
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@CrossOrigin
@RequestMapping("/api")
class ArticleController(private val articleRepository: ArticleRepository) {
    @CrossOrigin
    @GetMapping("/articles")
    fun getAllArticles(): List<Article> =
            articleRepository.findAll()

    @PostMapping("/articles")
    fun createNewArticle(@Valid @RequestBody article: Article): Article =
            articleRepository.save(article)

    @CrossOrigin
    @GetMapping("/articles/{id}")
    fun getArticleById(@PathVariable(value = "id") articleId: Long): ResponseEntity<Article> {
        return articleRepository.findById(articleId).map { article ->
            ResponseEntity.ok().body(article)
        }.orElse(ResponseEntity.notFound().build())
    }

    @PutMapping("/articles/{id}")
    fun updateArticleById(@PathVariable(value = "id") articleId: Long,
                          @Valid @RequestBody newArticle: Article): ResponseEntity<Article> {

        return articleRepository.findById(articleId).map { existingArticle ->
            val updatedArticle: Article = existingArticle
                    .copy(title = newArticle.title, content = newArticle.content)
            ResponseEntity.ok().body(articleRepository.save(updatedArticle))
        }.orElse(ResponseEntity.notFound().build())

    }

    @DeleteMapping("/articles/{id}")
    fun deleteArticleById(@PathVariable(value = "id") articleId: Long): ResponseEntity<Void> {

        return articleRepository.findById(articleId).map { article  ->
            articleRepository.delete(article)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())

    }
}