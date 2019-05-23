package com.xieminghui.view;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * describe:
 *
 * @author sunnyhuihui
 * @email xmh594603296@163.com
 * @date 2019-05-23 20:55
 */
@RestController
public class HelloController {
    @RequestMapping("/hello")
    public String hello() {
        return "helloxxxx";
    }
}
