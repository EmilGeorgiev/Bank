package com.clouway.http;


import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;

/**
 * Created by emil on 14-9-15.
 */
public class AppInjector extends GuiceServletContextListener {

    @Override
    protected Injector getInjector() {
        return Guice.createInjector(new Sitebricks(), new HttpModule());
    }
}
