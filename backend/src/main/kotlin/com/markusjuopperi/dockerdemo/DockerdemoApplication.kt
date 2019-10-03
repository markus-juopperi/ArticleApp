package com.markusjuopperi.dockerdemo

import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan


@SpringBootApplication
@ComponentScan
@EnableAutoConfiguration
class DockerdemoApplication

fun main(args: Array<String>) {
    runApplication<DockerdemoApplication>(*args)
}