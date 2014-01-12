数据库设计
===

##### 写在前面
翻译英文部分参考：[中国证监会官方文档](http://www.csrc.gov.cn/pub/newsite/xxfw/ch/)

#### 财务分析表(数据库表名 financial_analyses) 

字段 | 对应表 | 对应字段 | 含义 | _问题?_
--- | --- | --- | --- | ---
shareholder_capital_total | FS_Combas | A003100000 | 股东资本合计 | #1
minor_shareholder_right_total | FS_Combas | A003200000 | 少数股东权益合计 | #2
long_term_loan_total | FS_Combas | A002201000 | 长期借款合计 |    
bond_shall_pay | FS_Combas | A002203000 | 应付债券 |   
short_term_load_total | FS_Combas | A002101000 | 短期借款合计 |   
transactional_financial_liability | FS_Combas | A002105000 | 交易性金融负债 |   
noncurrent_liabilities_due_within_one_year | FS_Combas | A002125000 | 一年内到期的非流动负债 |   
current_liabilities_total | FS_Combas | A002100000 | 流动负债合计 |   
current_liabilities_other | FS_Combas | A002126000 | 其他流动负债 |   
noncurrent_liabilities_total | FS_Combas | A002200000 | 非流动负债合计 |     
monetary_funds | FS_Combas | A001101000 | 货币资金 |  
trading_financial_assets | FS_Combas | A001107000 | 交易性金融资产 |  
short_term_investment_net | FS_Combas | A001109000 | 短期投资净额 |  
notes_receivable_net | FS_Combas | A001110000 | 应收票据净额 |  
accounts_receivable_net | FS_Combas | A001111000 | 应收账款净额 |  
prepay_money_net | FS_Combas | A001112000 | 预付款项净额 |  
interest_receivable_net | FS_Combas | A001119000 | 应收利息净额 |  
dividend_receivable_net | FS_Combas | A001120000 | 应收股息净额 |  
other_receivable_net | FS_Combas | A001121000 | 其他应收款净额 |  
current_assets_total | FS_Combas | A001100000 | 流动资产合计 |  
fixed_assets_net | FS_Combas | A001212000 | 固定资产净额 |  
construction_in_progress_net | FS_Combas | A001213000 | 在建工程净额 |  
construction_materials | FS_Combas | A001214000 | 工程物资 |  
disposal_of_fixed_assets | FS_Combas | A001215000 | 固定资产清理 |  
productive_biological_assets_net | FS_Combas | A001216000 | 生产性生物资产净额 |  
oil_and_gas_assets_net | FS_Combas | A001217000 | 油气资产净额 |  
immaterial_assets_net | FS_Combas | A001218000 | 无形资产净额 |  
exploit_expenses | FS_Combas | A001219000 | 开发支出 |  
goodwill_net | FS_Combas | A001220000 | 商誉净额 |  
long_term_prepaid_expenses | FS_Combas | A001221000 | 长期待摊费用 |  
deferred_income_tax_assets | FS_Combas | A001222000 | 递延所得税资产 |  
other_noncurrent_assets | FS_Combas | A001223000 | 其他非流动资产 |  
available_for_sale_financial_assets_net | FS_Combas | A001202000 | 可供出售金融资产净额 |  
held_to_maturity_investments_net | FS_Combas | A001203000 | 持有至到期投资净额 |  
long_term_receivables_net | FS_Combas | A001204000 | 长期应收款净额 |  
long_term_equity_investment_net | FS_Combas | A001205000 | 长期股权投资净额 |  
long_term_creditors_right_investments_net | FS_Combas | A001206000 | 长期债权投资净额 |  
long_term_investments_net | FS_Combas | A001207000 | 长期投资净额 |  
investment_properties_net | FS_Combas | A001211000 | 投资性房地产净额 |  

####问题： 

1. A0003100000有两种说法？
  * 股东资本合计
  * 归属母公司所有者权益合计
2. 权益该如何翻译? 这里简单翻译成了 _right_
3. <span style="color: red"> !!! A002101000 A002105000 A002105000 A002201000 A002203000 __文档中为什么出现两次?__</span>

#### 营业分析表(数据库表名 operating_analyses) 

字段 | 对应表 | 对应字段 | 含义 | _问题?_
--- | --- | --- | --- | ---
total_operating_income | FS_Comins | B001100000 | 营业总收入 |  
operating_profit | FS_Comins | B001300000 | 营业利润 |  
net_profit | FS_Comins | B002000000 | 净利润 |    
operating_profit_rate | FR_T4 | T40900 | 营业利润率 |   

#### 现金流量表(数据库表名 current_flows) 

字段 | 对应表 | 对应字段 | 含义 | _问题?_
--- | --- | --- | --- | ---
operating_generated_current_net | FS_Comscfd | C001000000 | 营业活动产生的现金流量净额 |  
investment_generated_current_net | FS_Comscfd | C002000000 | 投资活动产生的现金流量净额 |  
finaning_generated_current_net | FS_Comscfd | C003000000 | 筹资活动产生的现金流量净额 |    
fix_immaterial_other_payed_cash | FS_Comscfd | C002006000 | 构建固定资产无形资产和其他长期资产支付的现金 | 



