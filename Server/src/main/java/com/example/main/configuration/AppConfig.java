package com.example.main.configuration;


import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@Configuration
@EnableSwagger2
public class AppConfig {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.ant("/api/**"))
                .build()
                .apiInfo(new ApiInfo("RssNetworkProject",
                        "Api doc for my fellow teammates",
                        "1",
                        "weDontHaveAny.com",
                        "University of Isfahan",
                        "None",
                        "404"));
    }


    @Bean
    public FilterRegistrationBean<AccessOriginFilter> accessOriginFilterFilterRegistrationBean() {
        FilterRegistrationBean<AccessOriginFilter> registrationBean
                = new FilterRegistrationBean<>();

        registrationBean.setFilter(new AccessOriginFilter());
        registrationBean.addUrlPatterns("*");
        registrationBean.setOrder(-101);

        return registrationBean;
    }
}
