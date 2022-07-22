// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { pageUrl } from "./urls"


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Support

/** Create a content tree */
export function contentTree(groups: Array<DocumentationGroup>, pages: Array<DocumentationPage>, prefix: string): Array<{title: string, url: string | undefined, offset: number}> {
    
    let items = new Array<{title: string, url: string | undefined, offset: number}>()

    for (let group of groups) {
        let level = 0
        let parent = group.parent
        while (parent) {
            level++
            parent = parent.parent
        }
        
        // Add group link
        items.push({
            title: group.title,
            url: pageUrl(group, prefix),
            offset: level
        })

        // Add pages
        for (let child of group.children) {
            if (child.type === "Page") {
                let page = child as DocumentationPage
                items.push({
                    title: page.title,
                    url: pageUrl(page, prefix),
                    offset: level + 1
                })
            }
        }
    }

    return items
}


/** Create a offset */
export function offset(level: number, offset: number): string {
    return " ".repeat(level * offset)
}
    