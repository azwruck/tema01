package sape.server.core.spring.config.method;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.GlobalMethodSecurityConfiguration;

/**
 * Implementa��o do configurador que permitie configurar permiss�es nos m�todos.
 *
 * @author Guilherme Dalmarco (dalmarco.gd@gmail.com)
 */
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true, proxyTargetClass = true)
public class MethodSecurityConfig extends GlobalMethodSecurityConfiguration {

}