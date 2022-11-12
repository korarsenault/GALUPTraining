======================================
PyLUSAT for QGIS - GALUP documentation
======================================

.. container:: container-lg
   :name: banner

   .. container:: col-lg-2

      `GALUP Logo   GALUP Training <../index.html>`__

   .. container:: left collapse navbar-collapse padme navbottom
      :name: navbarNav

      -  `Install PyLUSATQ <pylusat.html>`__
      -  `Documentation <Tools.html>`__
      -  `Gallery <Gallery.html>`__
      -  `Publication <Publication.html>`__

   .. container::
      :name: navbar-end

      .. container:: navbar-end-item navbottom

         -  |image1|
         -  `GitHub <https://github.com/SERVIR-WA/GALUP>`__
         -  `Twitter <https://twitter.com/galupghana>`__

|image2|
Menu
|image3|
Expand
|image4|
Light mode
|image5|
Dark mode
|image6|
Auto light/dark mode
|image7|

.. container:: visually-hidden

   Hide navigation sidebar

.. container:: visually-hidden

   Hide table of contents sidebar

.. container:: container-xl

   .. container:: header-left

      .. container:: visually-hidden

         Toggle site navigation sidebar

   .. container:: header-center

      ` <index.html>`__

      .. container:: brand

         GALUP documentation

   .. container:: header-right

      .. container:: theme-toggle-container theme-toggle-header

         .. container:: visually-hidden

            Toggle Light / Dark / Auto color theme

         |image8| |image9| |image10|

      .. container:: visually-hidden

         Toggle table of contents sidebar

   .. container:: row

      .. container:: toc-sticky containme

         .. container:: sidebar-container

            .. container:: sidebar-sticky

               ` <index.html>`__

               .. container::
                  :name: searchbox

               .. container:: sidebar-scroll

                  .. container:: sidebar-tree sidefont

                     -  `Land-Use Suitability Analysis with QGIS
                        Tools <Training1ReadMe.html>`__

                        .. container:: visually-hidden

                           Toggle child pages in navigation

                        -  `1-1: Software and Data
                           Preparation <Training1Module1.html>`__
                        -  `1-2: Introduction to LUCIS-OPEN Tools for
                           QGIS <Training1Module2.html>`__
                        -  `1-3: Create Suitability Models with QGIS
                           Graphical Modeler <Training1Module3.html>`__
                        -  `1-4: Aggregate Results to Make Land-Use
                           Decisions <Training1Module4.html>`__

                     -  `Introduction to Satellite Remote
                        Sensing <Training2ReadMe.html>`__

                        .. container:: visually-hidden

                           Toggle child pages in navigation

                        -  `2-1: Introduction to Remote Sensing
                           (RS) <Training2Module1.html>`__
                        -  `2-2: RS Applications using Google Earth
                           Engine <Training2Module2.html>`__
                        -  `2-3: Common RS Indices and Environmental
                           Variables <Training2Module3.html>`__
                        -  `2-4: Land Cover
                           Classification <Training2Module4.html>`__

                     -  `Integrated Decision Units for Land Use
                        Suitability Modeling <Training3ReadMe.html>`__

                        .. container:: visually-hidden

                           Toggle child pages in navigation

                        -  `3-1: Integrated Decision Units (IDUs) for
                           Land Use Suitability
                           Modeling <Training3Module1.html>`__

      .. container::
      main col-12 col-md-9 col-xl-7 py-md-5 pl-md-5 pr-md-4 bd-content

         .. container:: content

            .. container:: article-container

               `|image11| Back to top <#>`__

               .. container:: content-icon-container

                  .. container::
                  theme-toggle-container theme-toggle-content

                     .. container:: visually-hidden

                        Toggle Light / Dark / Auto color theme

                     |image12| |image13| |image14|

                  .. container:: visually-hidden

                     Toggle table of contents sidebar

               .. container:: section
                  :name: pylusat-for-qgis

                  .. rubric:: PyLUSAT for
                     QGIS\ `# <#pylusat-for-qgis>`__
                     :name: pylusat-for-qgis

                  The **Python for Land-use Suitability Analysis Tools**
                  (PyLUSAT) is an open-source Python package dedicated
                  for GIS-based land-use suitability modeling. This QGIS
                  plugin provides interfaces to all functions in PyLUSAT
                  to allow easy access and better integration into the
                  QGIS *processing framework*.

                  `pylusatq <../screenshot/pylusatq_native.png>`__
                  For more information of PyLUSAT toolkit:
                  https://github.com/chjch/pylusat or
                  https://pypi.org/project/pylusat/

                  .. container:: section
                     :name: requirements

                     .. rubric:: Requirements\ `# <#requirements>`__
                        :name: requirements

                     -  Windows (Windows 7, Windows 10 recommended) or
                        macOS.

                     -  *QGIS version* 3.16 or higher (recommended).

                  .. container:: section
                     :name: installation

                     .. rubric:: Installation\ `# <#installation>`__
                        :name: installation

                     .. container:: section
                        :name: set-up-pylusat

                        .. rubric:: 1. Set up
                           PyLUSAT\ `# <#set-up-pylusat>`__
                           :name: set-up-pylusat

                        **In Windows:**

                        #. We suggest two ways to set up your computer
                           for PyLUSAT.
                           **For beginners:**

                              .. container::

                                 | a. Visit `PyLUSAT GitHub
                                   repository <https://github.com/chjch/pylusat-qgis>`__
                                   Click **Code**, and then **Download
                                   ZIP** to download     the
                                   *pylusat-qgis* repository.
                                 | b. Copy \`pylusat_installer.bat`,
                                   paste it under QGIS folder in your
                                   system.
                                 | c. Right Click the copied
                                   *pylusat_installer.bat* to **Run as
                                   administrator**.

                           **OR, if you are familiar to work with terminals:**\ 
                              Visit `PyLUSAT GitHub
                              repository <https://github.com/chjch/pylusat-qgis>`__.
                              Copy and paste the code in
                              *pylusat_installer.bat* to your terminal
                              under the QGIS folder and run it.

                           ..

                              .. container::

                                 **Note**:
                                 The ``pylusat_installer.bat`` file
                                 helps you clean your environment and
                                 install proper pre-required packages.
                                 Noted that:
                                 1. we use ``pipwin`` instead of ``pip``
                                 or ``conda`` considering the
                                 compatibility of QGIS and     the
                                 packages.
                                 2. we apply ``pipwin refresh`` to force
                                 a cache rebuild in case any potential
                                 conflicts.
                                     For more information about the
                                 PyLUSAT plugin, please visit
                                     https://github.com/chjch/pylusat.

                        #. In the pop-up window:

                           a. **Specify your root folder of QGIS**: The
                              same where you place the installer.
                           b. **Is the QGIS a long term release [Y/N]**:
                              Refer to the version you installed. Type
                              **Y** for long term release. **N** for
                              short term release.

                        #. Press **Enter** key and wait for the
                           installation to complete.

                        **In macOS:** Use ``pip install pylusat`` in
                        Python Command Prompt of **QGIS**.

                     .. container:: section
                        :name: install-pylusat-plugin

                        .. rubric:: 2. Install PyLUSAT
                           plugin\ `# <#install-pylusat-plugin>`__
                           :name: install-pylusat-plugin

                        #. Download **PyLUSAT plugin** from
                           https://plugins.qgis.org/plugins/pylusatq/

                        #. Find **Plugins** on the top panel in your
                           **QGIS Desktop**, Click **Manage and install
                           plugins…**

                        #. In **Install from ZIP** interface, browse and
                           select the PyLUSAT ZIP file you download.

                        #. Click Install Plugin, once finished, restart
                           QGIS. ..

                              .. container::

                                 **Note:**\ 
                                 Once you click **Install Plugin**, you
                                 might see a pump-up window noticing
                                 “Couldn’t load plugin pylusatq”. Don’t
                                 worry, the installation will succeed
                                 after you restart QGIS.

                        #. Now you can find PyLUSAT tools in
                           **Processing Toolbox** panel.

            .. container:: related-pages

            .. container:: bottom-of-page

               .. container:: left-details

                  .. container:: copyright

                     Copyright © 2022, The GALUP Team

                  Made with `Sphinx <https://www.sphinx-doc.org/>`__ and
                  `@pradyunsg <https://pradyunsg.me>`__'s
                  `Furo <https://github.com/pradyunsg/furo>`__

               .. container:: right-details

                  .. container:: icons

      .. container:: toc-sticky containme

         .. container:: toc-title-container

            Contents

         .. container:: toc-tree-container

            .. container:: toc-tree

               -  `PyLUSAT for QGIS <#>`__

                  -  `Requirements <#requirements>`__
                  -  `Installation <#installation>`__

                     -  `1. Set up PyLUSAT <#set-up-pylusat>`__
                     -  `2. Install PyLUSAT
                        plugin <#install-pylusat-plugin>`__

.. |image1| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/40a36b23621409c25164095e015b4e2c10f5aafb.svg
   :target: https://github.com/chjch/pylusat
.. |image2| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/74cbc5153cc86713a73b071b3169a78c2fd60d59.svg
.. |image3| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/133fee49465d44318fefeba25854cd03e2cc0411.svg
   :class: feather-menu
.. |image4| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/eff3e81134581b13742cc8b89798fdf2b1e29260.svg
   :class: feather-chevron-right
.. |image5| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/3dfc64d04d4ae84fe8e052bd771a78037b0a2517.svg
   :class: feather-sun
.. |image6| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/5ca97773da665985bb10fb9699e0b32c7de11c49.svg
   :class: icon-tabler-moon
.. |image7| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/fabd3565c3a897151dff917825e501f77c51c7ce.svg
   :class: icon-tabler-shadow
.. |image8| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/ccbfec2207e262dda7dada0c681cb4bc20900690.svg
   :class: theme-icon-when-auto
.. |image9| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/84a4ad7c5336a2504f0ff3dc084c65eec6609dd8.svg
   :class: theme-icon-when-dark
.. |image10| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/1eb4e361c552b54579445e973fd023debeffa344.svg
   :class: theme-icon-when-light
.. |image11| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/791528835443673585560643fd631ceb5d910efc.svg
.. |image12| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/ccbfec2207e262dda7dada0c681cb4bc20900690.svg
   :class: theme-icon-when-auto
.. |image13| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/84a4ad7c5336a2504f0ff3dc084c65eec6609dd8.svg
   :class: theme-icon-when-dark
.. |image14| image:: vertopal_6f1619dd538d4a0e84c91c2582d5671a/1eb4e361c552b54579445e973fd023debeffa344.svg
   :class: theme-icon-when-light
