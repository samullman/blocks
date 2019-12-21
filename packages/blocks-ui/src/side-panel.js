/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'

import EditorPanel from './editor-panel'
import ThemePanel from './theme-panel'
import BlocksListing from './blocks-listing'
import TreeView from './tree-view'

export default ({
  activeTab,
  setActiveTab,
  blocks,
  srcBlocks,
  theme,
  setTheme,
  elementData,
  handleChange,
  handlePropChange,
  handleRemove,
  handleRemoveElement,
  handleParentSelect,
  handleInsertElement,
  handleClone,
  handleTextUpdate,
  setElementId
}) => (
  <section
    id="side-panel"
    sx={{
      borderLeft: '1px solid',
      borderColor: 'border',
      width: '40%',
      height: '100%',
      overflow: 'auto',
      pb: 3
    }}
  >
    <Tabs index={activeTab} onChange={index => setActiveTab(index)}>
      <TabList
        sx={{
          display: 'flex',
          width: '100%',
          position: 'sticky',
          top: 0
        }}
      >
        <Tab
          sx={{
            ...baseTabStyles,
            borderColor: activeTab === 0 ? 'transparent' : 'border',
            backgroundColor: activeTab === 0 ? null : '#fafafa'
          }}
        >
          Editor
        </Tab>
        <Tab
          sx={{
            ...baseTabStyles,
            borderLeft: '1px solid',
            borderRight: '1px solid',
            borderColor: activeTab === 1 ? 'transparent' : 'border',
            backgroundColor: activeTab === 1 ? null : '#fafafa'
          }}
        >
          Components
        </Tab>
        <Tab
          sx={{
            ...baseTabStyles,
            borderColor: activeTab === 2 ? 'transparent' : 'border',
            backgroundColor: activeTab === 2 ? null : '#fafafa'
          }}
        >
          Theme
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {elementData ? (
            <EditorPanel
              blocks={blocks}
              elementData={elementData}
              handleChange={handleChange}
              handlePropChange={handlePropChange}
              handleRemove={handleRemove}
              handleRemoveElement={handleRemoveElement}
              handleParentSelect={handleParentSelect}
              handleInsertElement={handleInsertElement}
              handleClone={handleClone}
              handleTextUpdate={handleTextUpdate}
              setElementId={setElementId}
            />
          ) : (
            <div>
              <h3
                sx={{
                  fontSize: 1,
                  fontWeight: 500,
                  m: 0,
                  lineHeight: 1,
                  px: 3,
                  py: 2,
                  borderBottom: '1px solid',
                  borderColor: 'border'
                }}
              >
                Canvas
              </h3>
              <TreeView children={srcBlocks} onSelect={setElementId} />
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {activeTab === 1 ? (
            <BlocksListing components={blocks} theme={theme} />
          ) : null}
        </TabPanel>
        <TabPanel>
          <ThemePanel theme={theme} setTheme={setTheme} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </section>
)

// Base styles for tabs
const baseTabStyles = {
  flex: 1,
  background: 'none',
  appearance: 'none',
  border: 0,
  py: 2,
  m: 0,
  fontSize: 0,
  fontWeight: 500,
  borderBottomStyle: 'solid',
  borderBottomWidth: 'thin',
  '&:focus': {
    zIndex: 99,
    outline: 'none',
    fontWeight: 500,
    textDecoration: 'underline'
  }
}
