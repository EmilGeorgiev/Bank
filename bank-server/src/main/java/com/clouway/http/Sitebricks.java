package com.clouway.http;

import com.google.sitebricks.SitebricksModule;

/**
 * Created by emil on 14-9-15.
 */
public class Sitebricks extends SitebricksModule {

    @Override
    protected void configureSitebricks() {
        super.configureSitebricks();

        at("/fetchClients").serve(FinderClientsService.class);
    }
}
