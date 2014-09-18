package com.clouway.http;

import com.clouway.core.PersistentClients;
import com.clouway.persistent.PersistentClientRepository;
import com.google.inject.servlet.ServletModule;

/**
 * Created by emil on 14-9-15.
 */
public class HttpModule extends ServletModule {

    @Override
    protected void configureServlets() {
        super.configureServlets();


        bind(PersistentClients.class).to(PersistentClientRepository.class);
    }
}
